import { useEffect, useState } from "react";
import { getPokemons, getPokemonDetails } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const list = await getPokemons(24);
      const details = await Promise.all(list.map((p) => getPokemonDetails(p.url)));
      setPokemons(details.filter(Boolean));
      setLoading(false);
    };
    fetchData();
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return <p className="p-6 text-center text-xl animate-pulse">Cargando Pokémon...</p>;

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-yellow-100 via-red-100 to-pink-100">
      <ToastContainer position="top-right" autoClose={1500} />
      <header className="text-center mb-8">
        <p className="text-gray-800 text-xl">
          Explora y busca tus Pokémon favoritos de manera divertida.
        </p>
      </header>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filtered.map((p) => (
          <div key={p.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <PokemonCard pokemon={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
