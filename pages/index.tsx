import { useQuery } from "react-query";
import { ProductListItem } from "../components/Product";
import { useRouter } from "next/router";
import { Pagination } from "../components/Pagination";

const getProducts = async (page: number) => {
  const take = 25;
  const offset = page * take - take;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const Home = () => {
  const router = useRouter();
  const page: number = router.query.page ? Number(router.query.page) : 1;

  const { isLoading, error, data } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

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
            <li
              key={product.id}
              className="hover:text-blue-500 border-2 shadow"
            >
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
      <Pagination length={10} page={page} />
    </>
  );
};

export default Home;

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
