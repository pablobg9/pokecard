import { useEffect, useState } from "react";

interface newPokemon {
  id: number,
  sprites: string,
  name: string,
  base_experience: number,
  hp: number,
  attack: number,
  specialatt: number,
  deffense: number
 } 

const x = Math.ceil(Math.random()*150);
console.log(x);


const POKEMON_RANDOM_ID = `https://pokeapi.co/api/v2/pokemon/${x}`
console.log(POKEMON_RANDOM_ID);

export default function CameraCard() {

  const[pokemon, setPokemon] = useState <newPokemon> ()

  useEffect(() => {
    fetch(POKEMON_RANDOM_ID)
      .then(res=>res.json())
      .then(data=>{
        const { id, sprites, name, base_experience, stats } = data
        const newPokemon = {
          id: id,
          sprites: sprites.front_shiny,
          name: name,
          base_experience: base_experience,
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          specialatt: stats[3].base_stat,
          deffense: stats[2].base_stat
        }
        setPokemon(newPokemon)
      })
  }, [])


  
    return (
      
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-between border rounded-lg shadow-md p-6 w-80 h-96">
          <header className="mb-4 	z-index: 1;">
          <img
             src="./src/assets/images/bg-pattern-card.svg"
           />
          </header>
          <div className="text-center mb-4">
          <img
             className="w-32 h-32 rounded-full border-2 border-gray-300 mt-2 	z-index: 1;"
             src={pokemon?.sprites}
           />
            <div className="flex justify-between items-center w-full">
              <h1 className="font-bold">{pokemon?.name}</h1>
              <p className="text-gray-600">{pokemon?.hp}hp</p>
            </div>
            <p className="text-gray-600 mt-2">{pokemon?.base_experience} exp</p>
          </div>
          <hr className="my-4 border-black" />
          <hr className="border-black w-full" /> 
          <footer className="flex justify-between w-full mt-4">
            <h3 className="text-lg text-center">{pokemon?.attack} Ataque</h3>
            <h3 className="text-lg text-center">{pokemon?.specialatt} AtaqueEspecial</h3>
            <h3 className="text-lg text-center">{pokemon?.deffense} Defensa</h3>
          </footer>
        </div>
      </div>
    );
  }
