import { useEffect, useState } from "react";
import { SinglePokemon } from "./component/SinglePokemon";

function App() {
  const [allPokemons, setAllPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results: any[]) {
      results.forEach(async (pokemon: { name: any }) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    allPokemons && console.log({ allPokemons });
  }, [allPokemons]);

  return (
    <div className="">
      <div className="container mx-auto px-5 pt-10 max-w-6xl">
        <h1 className="font-bold text-2xl text-center">
          All pokemon available
        </h1>
        <div className="mt-5">
          <div className="grid md:grid-cols-3 gap-4">
            {allPokemons &&
              allPokemons.map((p) => (
                <SinglePokemon
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  imgUrl={p?.sprites?.other?.dream_world?.front_default}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
