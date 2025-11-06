import { useState, useEffect } from 'react';
import { fetchPokemons } from '../services/api';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';

function Entities() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    setLoading(true);
    const data = await fetchPokemons(150);
    setPokemons(data);
    setFilteredPokemons(data);
    setLoading(false);
  };

  useEffect(() => {
    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm)
    );
    setFilteredPokemons(filtered);
  }, [searchTerm, pokemons]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Lista de Pokémon
      </h1>
      
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar Pokémon..."
      />

      {loading && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Cargando Pokémon...</p>
        </div>
      )}

      {!loading && filteredPokemons.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">No se encontraron Pokémon</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Entities;