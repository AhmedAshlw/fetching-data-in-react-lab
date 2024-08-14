import { useEffect, useState } from "react";
import "./App.css";

import * as starshipService from "./services/starshipService";

import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";

//Did the search and displaying parts .. and need to know how to add a starship ..:)

function App() {
  const [starships, setStarships] = useState([]);

  const getStarShip = async (starship) => {
    const data = await starshipService.show(starship);

    const newStarShipState = {
      name: data.current.condition.text,
      class: data.current.condition.text,
      manufacturer: data.current.condition.text,
      model: data.current.condition.text,
    };

    setStarships(newStarShipState);
  };

  useEffect(() => {
    console.log("RUNDS ON UPDATE");
  }, [starships]);

  useEffect(() => {
    console.log("Comp mounted");
    async function fetchStarShips() {
      await getStarShip("Manama");
    }

    fetchStarShips();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch getStarShip={getStarShip} />
      <StarshipList starships={starships} />
    </>
  );
}

export default App;
