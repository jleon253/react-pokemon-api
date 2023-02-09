import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, RootState, useAppDispatch } from "../context/store";
import { Pokemon } from "../ts";

export const usePostPokemon = (data: Pokemon) => {
  const { newPokemon } = useSelector((state: RootState) => ({
    newPokemon: state.newPokemon.data
  }));
  const dispatch = useAppDispatch();

  const [dataPokemon, setDataPokemon] = useState({});

  useEffect(() => {
    dispatch(postPokemon(data));
  }, []);

  useEffect(() => {
    setDataPokemon(newPokemon);
  }, [newPokemon]);

  return { dataPokemon};
};