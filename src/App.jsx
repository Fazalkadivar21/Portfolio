import Content from "./Contents";
import Link from "./Links";
import BuyMeACoffee from "./BuyMeACoffee";

function App() {
  return (
    <>
      <div className="lg:mx-96 | lg:px-36 | md:mx-28 | h-screen">
        <div className="m-12 | text-5xl | text-center | font-extrabold | font">
          <h1>Fazal Kadivar</h1>
        </div>
        <Content />
        <Link />
        <div className="flex items-start justify-start px-7">
        <h2 className="text-2xl py-2 pr-3">Sponsor : </h2>
        <BuyMeACoffee />
        </div>
      </div>
    </>
  );
}

export default App;
