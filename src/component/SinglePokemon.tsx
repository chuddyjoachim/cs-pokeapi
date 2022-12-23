import React from "react";
import { Link } from "react-router-dom";
type SinglePokemonProp = {
  id: number;
  name: string;
  imgUrl: string;
};

export const SinglePokemon = ({ id, imgUrl, name }: SinglePokemonProp) => {
  return (
    <div className="border rounded">
      <div className="flex flex-col py-4 items-center justify-center">
        <h2 className="font-semibold my-3">{name}</h2>
        <div className="h-40 flex justify-center items-center">
          <img src={imgUrl} alt={name} width={80} height={80} />
        </div>
        <Link to={`/${id}`}>
            
        <button
          className="border p-1 px-1.5 mt-auto"
          >
          View detail
        </button>
            </Link>
      </div>
    </div>
  );
};
