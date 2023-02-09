import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LABELS } from "../../constants";
import { getPokemons, postPokemon, useAppDispatch } from "../../context/store";
import { useFetchPokemons } from "../../hooks";
import { Pokemon } from "../../ts";
import { InputForm } from "../InputForm";

import styles from './PokeForm.module.scss';

export const PokeForm = () => {

  const ID_FORM = 'poke-form';
  const { NAME, URL, TYPE, ATTACK, DEFENSE, HP, TITLE, ACTIONS: {PRIMARY}, VALIDATIONS: {URL_PATTERN} } = LABELS.POKE_FORM;

  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const dispatch = useAppDispatch();

  const { dataPokemons } = useFetchPokemons();

  const onSubmitForm = (data: Pokemon) => {
    dispatch(postPokemon(data));
    reset();
  };


  return (
    <>
      <span className={styles.pokeFormTitle}>{TITLE}</span>
      <form id={ID_FORM} className={styles.pokeFormContainer} onSubmit={handleSubmit(onSubmitForm)}>
        <section>
          <InputForm
            id={NAME.ID}
            isRequired
            labelText={NAME.LABEL}
            placeholderText={NAME.PLACEHOLDER}
            formRegister={register}
            errorValidation={errors}
          />
          <InputForm
            id={URL.ID}
            isRequired
            labelText={URL.LABEL}
            patternText={URL_PATTERN}
            placeholderText={URL.PLACEHOLDER}
            formRegister={register}
            errorValidation={errors}
          />
          <InputForm
            id={TYPE.ID}
            isRequired
            labelText={TYPE.LABEL}
            placeholderText={TYPE.PLACEHOLDER}
            formRegister={register}
            errorValidation={errors}
          />
        </section>
        <section>
         <InputForm
            id={HP.ID}
            isRequired
            labelText={HP.LABEL}
            typeInput="range"
            formRegister={register}
            errorValidation={errors}
          />
          <InputForm
            id={ATTACK.ID}
            isRequired
            labelText={ATTACK.LABEL}
            typeInput="range"
            formRegister={register}
            errorValidation={errors}
          />
          <InputForm
            id={DEFENSE.ID}
            isRequired
            labelText={DEFENSE.LABEL}
            typeInput="range"
            formRegister={register}
            errorValidation={errors}
          />
        </section>
        <section className={styles.pokeFormActions}>
          <button type="submit" className={styles.pokeForm__Primary}>{PRIMARY}</button>
        </section>
      </form>
    </>
  );
};