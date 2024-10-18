import { useEffect, useState } from "react";

interface newPokemon {
  id: number;
  sprites: string;
  name: string;
  base_experience: number;
  hp: number;
  attack: number;
  specialatt: number;
  deffense: number;
}

export default function CameraCard() {
  const [pokemon, setPokemon] = useState<newPokemon | null>(null);
  const [x, setX] = useState(Math.ceil(Math.random() * 151));
  const [loading, setLoading] = useState(false); // Estado de carga

  function changeX() {
    setX(Math.ceil(Math.random() * 151));
  }

  useEffect(() => {
    setLoading(true); // Inicia la carga
    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
      .then((res) => res.json())
      .then((data) => {
        const { id, sprites, name, base_experience, stats } = data;
        const newPokemon = {
          id: id,
          sprites: sprites.other.dream_world.front_default,
          name: name,
          base_experience: base_experience,
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          specialatt: stats[3].base_stat,
          deffense: stats[2].base_stat,
        };
        setPokemon(newPokemon);
        setLoading(false); // Finaliza la carga
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        setLoading(false); // Finaliza la carga en caso de error
      });
  }, [x]);

  return (
    <>
      <div className="flex flex-col items-center justify-between rounded-2xl shadow shadow-black w-82 h-104 overflow-hidden bg-white">
        <header className="w-full">
          <img
            className="w-full h-32"
            src="./src/assets/images/bg-pattern-card.svg"
            alt="Fondo de tarjeta"
          />
        </header>

        <div className="-mt-28">
          {loading ? (
            <div className="w-52 h-52 border-8 border-t-8 border-blue-500 rounded-full animate-spin bg-black mx-auto relative"></div>
          ) : (
            <img
              className="w-52 h-52 rounded-full bg-white border-4 border-white mx-auto"
              src={pokemon?.sprites}
              alt={pokemon?.name}
            />
          )}
        </div>

        <div className="text-center mt-3">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-bold capitalize">{pokemon?.name}</h1>
            <p className="text-gray-400 mx-1">{pokemon?.hp} hp</p>
          </div>
          <p className="text-gray-400 mt-2">{pokemon?.base_experience} exp</p>
        </div>

        <hr className="my-7 border-gray-300 w-full" />

        <footer className="flex justify-between w-full px-6 mb-6">
          <div className="text-center mx-2">
            <h3 className="text-xs font-black mb-3">{pokemon?.attack} K</h3>
            <p className="text-xs">Ataque</p>
          </div>
          <div className="text-center mx-2">
            <h3 className="text-xs font-black mb-3">{pokemon?.specialatt} K</h3>
            <p className="text-xs">Ataque Especial</p>
          </div>
          <div className="text-center mx-2">
            <h3 className="text-xs font-black mb-3">{pokemon?.deffense} K</h3>
            <p className="text-xs">Defensa</p>
          </div>
        </footer>
      </div>
      <button
        className="mt-4 bg-white text-black font-bold py-5 rounded shadow shadow-black"
        onClick={changeX}
      >
        New Pokémon
      </button>
    </>
  );
}
