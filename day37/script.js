const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

fetchPokemons();
{
  /* <div class="pokemon" style="background-color: rgb(222, 253, 224)">
        <div class="img-container">
          <img
            src="https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F001.webp&w=384&q=75"
            alt=""
          />
        </div>
        <div class="info"><span class="number">#001</span></div>
        <h3 class="name">Bulbasaur</h3>
        <small class="type">Type: <span>grass</span></small>
      </div> */
}
