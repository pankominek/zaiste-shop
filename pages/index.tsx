import { useCreateProductReviewMutation } from '../generated/graphql';

const Home = () => {
  const [createReview, { data, loading, error }] = useCreateProductReviewMutation();

  const addReview = () =>
    createReview({
      variables: {
        review: {
          "headline": "Lorem ipsum",
          "name": "Kamil",
          "email": "kamil@pankominek.pl",
          "content": "Bardzo dobry produkt!",
          "rating": 5
        }
      }
    });

  return (
    <>
      <button onClick={addReview} type="button">Dodaj komentarz</button>
      {loading && (
        <span>loading..</span>
      )}
      {error && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
};

export default Home;
