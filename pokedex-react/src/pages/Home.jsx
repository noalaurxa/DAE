import { useEffect, useState } from "react";
import { getPokemons, getPokemonDetails } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getPokemons(6);
      const details = await Promise.all(list.map(p => getPokemonDetails(p.url)));
      setPokemons(details.filter(Boolean));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-6 text-center text-xl">Cargando Pokémon...</p>;

  return (
    <div className="p-6 bg-gradient-to-b from-yellow-100 to-red-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={1500} />
      <section className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-red-600 mb-4 drop-shadow-md">🕹️ PokeDex Explorer</h2>
        <p className="text-gray-800 text-xl md:text-2xl font-medium">
          Explora y descubre tus Pokémon favoritos de forma divertida y visual.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6 text-center text-red-700">Pokémon destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pokemons.map(p => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
