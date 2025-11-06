import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-white text-2xl font-bold">🕹️ PokeDex Explorer</h1>
        <div className="flex gap-4">
          <Link to="/" className="text-white font-semibold hover:underline">
            Home
          </Link>
          <Link to="/entities" className="text-white font-semibold hover:underline">
            Pokémon
          </Link>
        </div>
      </div>
    </nav>
  );
}
