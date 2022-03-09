import { useQuery } from "react-query";
import { ProductListItem } from "../components/Product";

const getProducts = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const Home = () => {
  const { isLoading, data, error } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>No data</div>;
  }

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => {
          return (
            <li key={product.id} className="hover:shadow hover:text-blue-500 border-2">
              <ProductListItem
                data={{
                  id: product.id,
                  title: product.title,
                  thumbnailUrl: product.image,
                  thumbnailAlt: product.title,
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products`
  );
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
