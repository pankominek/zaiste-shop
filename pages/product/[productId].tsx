import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { ProductDetails } from "../../components/Product";
import { GetProductDetailsBySlugDocument, GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables, GetProductsSlugsDocument, GetProductsSlugsQuery } from "../../generated/graphql";
import { apolloClient } from "../../graphql/apolloClient";
import { InferGetStaticPaths } from "../../types";

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
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
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

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: {
      slug: params.productId
    },
    query: GetProductDetailsBySlugDocument
  });

  if (!data.product) {
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
