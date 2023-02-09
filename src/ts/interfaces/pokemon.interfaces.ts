export interface Pokedex {
  data: Pokemon[],
  isLoading: boolean,
  error: null | {
    statusCode: number,
    message: string
  },
  countPokemons: number
}

export interface NewPokemon {
  data: Pokemon | {},
  isLoading: boolean,
  error: null | {
    statusCode: number,
    message: string
  }
}

export interface Pokemon {
  attack: number,
  defense: number,
  hp: number,
  id: number,
  idAuthor: number,
  image: string,
  name: string,
  type: string
}