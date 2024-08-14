import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <div>
      <h2>Starships</h2>
      <h3>Number of results: {starships.length}</h3>

      {starships.length === 0 ? (
        <p>No starships found</p>
      ) : (
        starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))
      )}
    </div>
  );
};

export default StarshipList;
