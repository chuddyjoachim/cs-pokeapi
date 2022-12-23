import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type PokemonDetailsType = {
  name: string;
  sprites: any;
  abilities: any[];
  moves: any[];
};

export const Pokemon = () => {
  const params = useParams();
  const [pageLoading, SetPageLoading] = useState<boolean>(false);
  const [pokemonDetail, setPokemonDetal] = useState<PokemonDetailsType>();

  async function getSinglePokemon(id: string) {
    SetPageLoading(true);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemonDetal(data);

      SetPageLoading(false);
    } catch (error) {
      SetPageLoading(false);
    }
  }

  useEffect(() => {
    const id = params?.id!!;
    getSinglePokemon(id);
  }, [params]);
  return (
    <>
    
      {pageLoading ? (
        <>
          <div className="w-screen container h-screen justify-center items-center text-xl text-black">
            Loading...
          </div>
        </>
      ) : (
        <>
        <div className="my-4 text-blue-700 container mx-auto px-5 max-w-6xl">
        <Link to="/">Home</Link>
        </div>
          {pokemonDetail && (
            <div className="container mx-auto px-5 pt-10 max-w-6xl">
              <h2 className="font-bold text-center">{pokemonDetail?.name}</h2>
              <div className="mt-5">
                <img
                  src={
                    pokemonDetail?.sprites?.other?.dream_world?.front_default
                  }
                  alt={pokemonDetail.name}
                />
              </div>
              <div className="my-4 flex  space-x-2">
                <h2 className="font-bold text-lg">Abilities:</h2>{" "}
                {pokemonDetail.abilities.map((a) => (
                  <p>{a.ability.name}</p>
                ))}
              </div>
              <div className="my-4 flex flex-col space-y-2">
                <h2 className="font-bold text-lg">Moves:</h2>
                <ul className="flex space-y-2 flex-col list-disc">
                  {pokemonDetail.moves.map((a) => (
                    <li>{a.move.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
