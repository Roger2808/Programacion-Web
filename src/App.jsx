import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=18");
      const data = await res.json();

      const details = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          return await res.json();
        })
      );

      setPokemons(details);
    }

    fetchPokemons();
  }, []);

  return (
    <div>
      <header className="app-header">
        <img src={pokeball} alt="Pokébola" className="pokeball-icon" />
        <h1 className="app-title">Poke Gallery</h1>
      </header>
      <div className="pokemon-grid">
        {pokemons.map((p) => (
          <div key={p.id} className="pokemon-card">
            <img
              src={p.sprites.other["official-artwork"].front_default}
              alt={p.name}
            />
            <h2>{p.name}</h2>
            <p>Tipo: {p.types.map((t) => t.type.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
