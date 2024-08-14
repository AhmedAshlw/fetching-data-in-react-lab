const BASE_URL = "https://swapi.dev/api/starships/";

const show = async (starship) => {
  try {
    const queryString = `&q=${starship}`;
    const res = await fetch(BASE_URL + queryString);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
