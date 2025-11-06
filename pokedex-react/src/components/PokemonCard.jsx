import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function PokemonCard({ pokemon }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.some(p => p.name === pokemon.name));
  }, [pokemon.name]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavs;
    if (isFav) {
      updatedFavs = favs.filter(p => p.name !== pokemon.name);
      toast.info(`${pokemon.name} removido de favoritos!`);
    } else {
      updatedFavs = [...favs, { name: pokemon.name, sprite: pokemon.sprites.front_default }];
      toast.success(`${pokemon.name} agregado a favoritos!`);
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setIsFav(!isFav);
    window.dispatchEvent(new Event("storage")); // actualizar contador en Navbar
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-3xl transition-all duration-300 relative">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-28 h-28 mb-4 animate-bounce" />
      <h3 className="text-2xl font-bold capitalize mb-2 text-red-500">{pokemon.name}</h3>
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>

      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 text-2xl transition-transform ${isFav ? "text-red-500 animate-pulse" : "text-gray-400 hover:text-red-500"}`}
      >
        ❤️
      </button>
    </div>
  );
}
