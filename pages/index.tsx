import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <main className="bg-white-100 mx-auto w-full  max-w-5xl flex-grow bg-white py-4 px-2">
        <h2>Home</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
