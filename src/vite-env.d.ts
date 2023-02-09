/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_ALL_POKEMONS: string
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}