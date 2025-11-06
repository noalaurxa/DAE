const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (limit = 20) => {
  const res = await fetch(`${BASE_URL}?limit=${limit}`);
  const data = await res.json();
  return data.results;
};

export const getPokemonDetails = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching Pokémon details", err);
    return null;
  }
};
