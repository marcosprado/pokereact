/* eslint jsx-a11y/anchor-is-valid: 0*/
/* eslint no-extend-native: 0*/
/* eslint no-useless-concat: 0*/
/* eslint no-unused-vars: 0*/
/* eslint react-hooks/exhaustive-deps: 0*/

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";

export default function Home() {
  const navigate = useNavigate();

  // Functions
  class Pokemon {
    name;
    picture;
    types = [];
    number;
    mainType;
  }

  Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
  });

  function newPokemon(pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokemonDetail.name;
    pokemon.number = "#" + pokemonDetail.id;
    pokemon.picture = pokemonDetail.sprites.other.dream_world.front_default;

    const types = pokemonDetail.types.map((pokeTypes) => pokeTypes.type.name);
    const [mainType] = types;
    pokemon.mainType = mainType;
    pokemon.types = types;

    return pokemon;
  }

  function displayPokemon(pokemonDetail) {
    let pokemon = newPokemon(pokemonDetail);

    return `<li class="pokemon ${pokemon.mainType}" onClick="goToAnotherPage(${
      pokemonDetail.id
    })">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name.capitalize()}</span>
            <div class="detail">
                <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
                </ol>
                <img src=${pokemon.picture} alt=${pokemon.name}>
            </div></li>`;
  }

  async function getPokemonData(number) {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + `${number}`
    );
    const pokemon = await response.json();
    let pokemonList = document.getElementById("pokemonList");
    pokemonList.innerHTML += displayPokemon(pokemon);
  }

  function goToAnotherPage(pokemonId) {
    console.log("I'm here");
    navigate(`pokemon/${pokemonId}`);
  }
  // End Functions

  React.useEffect(() => {
    async function populatePokedex(limit) {
      let i = 0;
      for (i = 1; i <= limit; i++) {
        const pokemonPromise = await getPokemonData(i);
      }
    }

    populatePokedex(151);
  }, []);

  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="pokedexLogo" height="100px" width="250px" />
      </div>
      <section className="content">
        <ol id="pokemonList" className="pokemons"></ol>
      </section>
    </div>
  );
}
