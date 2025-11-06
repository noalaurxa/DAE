import axios from "axios";

export const getPokemons = async (limit = 20) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return [];
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    return null;
  }
};
