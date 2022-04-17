import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { ProductDetails } from "../../components/Product";
import { apolloClient } from "../../graphql/apolloClient";
import { InferGetStaticPaths } from "../../types";
import { GetProductsListResponse } from "../products-ssg";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>no data</div>;
  }

  return (
    <ProductDetails
      data={{
        id: data.slug,
        title: data.name,
        description: data.description,
        thumbnailUrl: data.images[0].url,
        thumbnailAlt: data.name,
        rating: 4.75,
        longDescription: data.longDescription,
      }}
    />
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  interface GetProductsSlugsResponse {
    products: Product[];
  }

  interface Product {
    slug: string;
  }

  const { data } = await apolloClient.query<GetProductsSlugsResponse>({
    query: gql`
      query GetProductsSlugs {
        products {
          slug
        }
      }
    `,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {

  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }



  interface GetProductDetailsBySlugResponse {
    product: Product;
  }

  interface Product {
    slug: string;
    name: string;
    price: number;
    description: string;
    images: Image[];
  }

  interface Image {
    url: string;
  }


  const { data } = await apolloClient.query<GetProductDetailsBySlugResponse>({
    variables: {
      slug: params.productId
    },
    query: gql`
      query GetProductDetailsBySlug($slug: String) {
        product(where: {slug: $slug}) {
          slug
          name
          price
          description
          images {
            url
          }
        }
      }
    `,
  });

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};
