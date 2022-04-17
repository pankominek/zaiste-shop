import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(gql
    `query GetProductsList {
      products{
        id
        slug
        name
        price
        images(first: 1) {
          url
        }
      }
    }
  `);

  if (loading) {
    return <p>Loading..</p>
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
};

export default Home;
