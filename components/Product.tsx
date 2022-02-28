import Image from "next/image";

interface ProductProps {
  data: {
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <>
      <div className="m-4 mx-auto relative w-full h-56 flex">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold mb-3 text-xl">{data.title}</h2>
        <p className="mb-3">{data.description}</p>
        <p>
          Rating: <span className="font-bold">{data.rating}</span>
        </p>
      </div>
    </>
  );
};
