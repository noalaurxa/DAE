import { useEffect, useState } from "react";
import { getPokemons, getPokemonDetails } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Entities() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getPokemons(12);
      const details = await Promise.all(list.map(p => getPokemonDetails(p.url)));
      setPokemons(details.filter(Boolean));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-6 text-xl text-center">Cargando Pokémon...</p>;

  return (
    <div className="p-6 bg-gradient-to-b from-yellow-50 via-red-50 to-yellow-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={1500} />
      <h2 className="text-4xl font-extrabold mb-8 text-center text-red-600 drop-shadow-lg">Listado de Pokémon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pokemons.map(p => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
