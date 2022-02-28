const DATA = {
  title: "Home",
  description: "Lorem ipsum dolor sit amet.",
};

const Home = () => {
  return (
    <>
      <h2 className="font-semibold">{DATA.title}</h2>
      <p>{DATA.description}</p>
    </>
  );
};

export default Home;
