import Content from "./Contentsontents";
import Link from "./Links";

const links = {
  Github: "https://github.com/fazalkadivar21",
  Twitter: "https://x.com/fazalkadivar21",
  Linkedin: "https://linkedin.com/in/fazalkadivar",
};

function App() {
  return (
    <>
      <div className="lg:mx-96 | lg:px-36 | md:mx-28 | h-screen">
        <div className="m-12 | text-3xl | text-center | font-extrabold | font">
          <h1>Fazal Kadivar</h1>
        </div>
        <Content />
        <Link data={links}/>
      </div>
    </>
  );
}

export default App;
