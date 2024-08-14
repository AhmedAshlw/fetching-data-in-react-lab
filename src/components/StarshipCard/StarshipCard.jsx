const StarshipCard = ({ starships }) => {
  <section>
    <h2>{starships.name}</h2>
    <p>class: {starships.class}</p>
    <p>manufacturer: {starships.manufacturer}</p>
    <p>model: {starships.model}</p>
  </section>;
};
export default StarshipCard;
