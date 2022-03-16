import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Rating } from "../components/Rating";

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
    <div className="grid grid-cols-2 gap-4">
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
          <ReactMarkdown>{data.longDescription}</ReactMarkdown>
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
