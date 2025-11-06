import { toast } from "react-toastify";

export default function PokemonCard({ pokemon }) {
  const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updated;
    if (stored.includes(pokemon.name)) {
      updated = stored.filter((p) => p !== pokemon.name);
      toast.info(`${pokemon.name} removido de favoritos`);
    } else {
      updated = [...stored, pokemon.name];
      toast.success(`${pokemon.name} agregado a favoritos`);
    }
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="card p-4 text-center hover:shadow-xl transition-all">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img mx-auto mb-2"
      />
      <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <button onClick={toggleFavorite} className="mt-3 w-full">
        ❤️ Favorito
      </button>
    </div>
  );
}
