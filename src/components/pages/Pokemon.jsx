/* eslint jsx-a11y/anchor-is-valid: 0*/
/* eslint no-extend-native: 0*/
/* eslint no-useless-concat: 0*/
/* eslint no-unused-vars: 0*/
/* eslint react-hooks/exhaustive-deps: 0*/

import React from "react";
import logo from "../../img/logo.svg";

export default function Pokemon() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="pokedexLogo" height="100px" width="250px" />
      </div>
      <div className="pokemonContainer">
        <section className="pokemonContent">
          <span className="name">Charizard</span>
          <span className="number">#6</span>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
            alt="charizard"
          />
          <div className="detail fire">
            <ol className="types">
              <li className="type fire">fire</li>
              <li className="type flying">flying</li>
            </ol>
            <p className="description">
              When it swings its burning tail, it elevates the temperature to
              unbearably high levels.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
