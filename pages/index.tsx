import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  const dataHeader = {
    navbar: {
      items: [{ name: "About", path: "/about" }],
    },
    topbar: {
      text: "Get free delivery on orders over $100",
      status: true,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header data={dataHeader} />
      <main className="bg-white container flex-grow py-4 px-2">
        <h2>Home</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
