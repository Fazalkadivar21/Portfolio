import Content from "./Contents";
import Link from "./Links";

function App() {
  return (
    <>
      <div className="lg:mx-96 | lg:px-36 | md:mx-28 | h-screen">
        <div className="m-12 | text-5xl | text-center | font-extrabold | font">
          <h1>Fazal Kadivar</h1>
        </div>
        <Content />
        <Link />
      </div>
    </>
  );
}

export default App;
