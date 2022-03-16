import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { CustomReactMarkdown } from "../components/CustomReactMarkdown";
import { Rating } from "../components/Rating";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: MDXRemoteSerializeResult<Record<string, unknown>>;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://naszsklep-api.vercel.app/api/products${data.id}`}
        openGraph={{
          url: `https://naszsklep-api.vercel.app/api/products${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Zaiste Shop",
        }}
      />
      <figure className="border-2 shadow bg-white p-4">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </figure>
      <div className="border-2 shadow bg-white p-4">
        <h2>{data.title}</h2>
      </div>
      <div className="col-span-full	border-2 shadow bg-white p-4">
        <article className="prose lg:prose-xl">
          <CustomReactMarkdown>{data.longDescription}</CustomReactMarkdown>
          <Rating rating={data.rating} />
        </article>
      </div>
    </div>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <Link href={`/product/${data.id}`}>
      <a>
        <div className="bg-white p-4">
          <Image
            src={data.thumbnailUrl}
            alt={data.thumbnailAlt}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
          />
        </div>
        <h2 className="p-4 font-bold text-lg">{data.title}</h2>
      </a>
    </Link>
  );
};
