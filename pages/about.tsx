const DATA = {
  title: "About",
  description: "Ipsa et unde tenetur, ut nobis magnam.",
};

const About = () => {
  return (
    <>
      <h2 className="font-semibold">{DATA.title}</h2>
      <p>{DATA.description}</p>
    </>
  );
};

export default About;
