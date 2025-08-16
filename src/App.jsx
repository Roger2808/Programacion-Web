import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <div className="pokemon-grid">
      {pokemons.map((p) => (
        <div key={p.id} className="pokemon-card">
          {/* Todo el contenido dentro del recuadro redondeado */}
          <img
            src={p.sprites.other["official-artwork"].front_default}
            alt={p.name}
          />
          <h2>{p.name}</h2>
          <p>Tipo: {p.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default App
