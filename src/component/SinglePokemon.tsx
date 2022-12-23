import React from "react";

type SinglePokemonProp = {
  id: number;
  name: string;
  imgUrl: string;
};

const handleViewDetail = (id: number) => {
  console.log({ id });
};

export const SinglePokemon = ({ id, imgUrl, name }: SinglePokemonProp) => {
  return (
    <div className="border rounded">
      <div className="flex flex-col py-4 items-center justify-center">
        <h2 className="font-semibold my-3">{name}</h2>
        <div className="h-40 flex justify-center items-center">
          <img src={imgUrl} alt={name} width={80} height={80} />
        </div>
        <button
          className="border p-1 px-1.5 mt-auto"
          onClick={() => handleViewDetail(id)}
        >
          View detail
        </button>
      </div>
    </div>
  );
};
