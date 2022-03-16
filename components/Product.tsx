import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: string;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <figure className="mb-3 p-4 bg-white">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </figure>
      <article className="prose lg:prose-xl">
        <h2>{data.title}</h2>
        <ReactMarkdown className="mb-3">{data.longDescription}</ReactMarkdown>
        <p>
          Rating: <span className="font-bold">{data.rating}</span>
        </p>
      </article>
    </>
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
