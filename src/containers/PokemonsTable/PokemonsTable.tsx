import { useDispatch } from "react-redux";
import { ActionButtons, HeaderTable, RowTable } from "../../components";
import { deletePokemon, updatePokemon, useAppDispatch } from "../../context/store";
import { useMatchMedia } from "../../hooks";
import { Pokemon } from "../../ts";

import styles from './PokemonsTable.module.scss';

export const PokemonsTable = (
  { data, action }
  :
  { data: Pokemon[], action: Function }
) => {

  const { isMatchMedia } = useMatchMedia();
  const dispatch = useAppDispatch();

  const actionDeletePokemon = (data: Pokemon) => {
    dispatch(deletePokemon(data))
  };
  
  // const actionUpdatePokemon = (data: Pokemon) => {
  //   dispatch(updatePokemon(data))
  // };

  return (
    <section className={styles.pokemonsTableContainer}>
      {
        !isMatchMedia && (<HeaderTable />)
      }
      { data.length > 0 && data.map((pokemon) => (
        <RowTable element={pokemon} key={pokemon.id}>
          <ActionButtons actionPrimary={() => action()} actionSecondary={() => actionDeletePokemon(pokemon)} />
        </RowTable>
        ))
      }
    </section>
  );
};