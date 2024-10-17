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

const x = Math.ceil(Math.random() * 151);
const POKEMON_RANDOM_ID = `https://pokeapi.co/api/v2/pokemon/${x}`;

export default function CameraCard() {
  const [pokemon, setPokemon] = useState<newPokemon | null>(null);

  useEffect(() => {
    fetch(POKEMON_RANDOM_ID)
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
      });
  }, []);

  return (
    <div className=" flex flex-col items-center justify-between rounded-2xl shadow-md w-82 h-104 overflow-hidden bg-white">
      <header className="w-full">
        <img
          className="w-full h-32"
          src="./src/assets/images/bg-pattern-card.svg"
        />
      </header>

      <div className=" -mt-28">
        <img
          className="w-52 h-52 rounded-full bg-white border-4 border-white mx-auto"
          src={pokemon?.sprites}
        />
      </div>

      <div className="text-center mt-3">
        <div className="flex justify-between items-center w-full ">
          <h1 className="font-bold capitalize">{pokemon?.name}</h1>
          <p className="text-gray-400 mx-1">{pokemon?.hp}hp</p>
        </div>
        <p className="text-gray-400 mt-2">{pokemon?.base_experience} exp</p>
      </div>

      <hr className="my-7 border-gray-300 w-full" />

      <footer className="flex justify-between w-full px-6 mb-6">
        <div className="text-center mx-2">
          <h3 className="text-xs font-black mb-3">{pokemon?.attack}K</h3>
          <p className="text-xs">Ataque</p>
        </div>
        <div className="text-center mx-2">
          <h3 className="text-xs font-black mb-3">{pokemon?.specialatt}K</h3>
          <p className="text-xs ">Ataque Especial</p>
        </div>
        <div className="text-center mx-2">
          <h3 className="text-xs font-black mb-3">{pokemon?.deffense}K</h3>
          <p className="text-xs">Defensa</p>
        </div>
      </footer>
    </div>
  );
}
