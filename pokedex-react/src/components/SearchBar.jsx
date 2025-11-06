export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Busca tu Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded-lg w-80 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}
