import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, getPokemons } from "../context/store";
import { Pokemon } from "../ts";

export const useFetchPokemons = () => {
  const { pokemons } = useSelector((state: RootState) => ({
    pokemons: state.pokemons.data,
  }));
  const dispatch = useAppDispatch();

  const [dataPokemons, setDataPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  useEffect(() => {
    setDataPokemons(pokemons);
  }, [pokemons]);

  return { dataPokemons };
};