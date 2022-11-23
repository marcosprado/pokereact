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

  return `<li class="pokemon ${pokemon.mainType}">
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
  console.log(pokemon);
  let pokemonList = document.getElementById("pokemonList");
  pokemonList.innerHTML += displayPokemon(pokemon);
}
