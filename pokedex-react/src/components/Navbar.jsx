import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateFavs = () => {
      const favs = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavCount(favs.length);
    };
    updateFavs();
    window.addEventListener("storage", updateFavs);
    return () => window.removeEventListener("storage", updateFavs);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 text-white p-6 flex justify-between items-center shadow-xl">
      <h1 className="font-extrabold text-2xl tracking-wider drop-shadow-lg">🕹️ PokeDex Explorer</h1>
      <div className="flex gap-6 text-lg font-medium items-center">
        <Link className="hover:scale-110 transition-transform hover:text-yellow-200" to="/">Home</Link>
        <Link className="hover:scale-110 transition-transform hover:text-yellow-200" to="/entities">Pokémon</Link>
        <span className="ml-4 bg-white text-red-500 px-3 py-1 rounded-full font-bold shadow-md">{favCount} ❤️</span>
      </div>
    </nav>
  );
}
