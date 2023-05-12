import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";

const App = () => {

  const coffees = useLoaderData();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-brown-600 my-5 text-center">Coffee Coffee Coffee: {coffees.length}</h1>
      <div className="p-6 grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;