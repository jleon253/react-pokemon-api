import { useEffect } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { LABELS } from '../../constants';
import styles from './InputForm.module.scss';

export const InputForm = (
  { errorValidation, id, isRequired = false, labelText, patternText, placeholderText, typeInput = 'text', formRegister }
  :
  { 
    errorValidation?: FieldErrors<FieldValues>
    id: string,
    isRequired?: boolean,
    labelText: string,
    patternText?: RegExp
    placeholderText?: string,
    typeInput?: 'text' | 'range',
    formRegister: UseFormRegister<FieldValues>,
  }
) => {

  const { VALIDATIONS: { MSG_REQUIRED, MSG_PATTERN }} = LABELS.POKE_FORM;

  const validatorMessage = (type: string) => {
    switch(type){
      case 'required':
        return MSG_REQUIRED;
      case 'pattern':
        return MSG_PATTERN;
      default:
        return '';
    }
  };

  return (
    <div className={styles.inputFormContainer}>
      <label htmlFor={id} className={styles.inputFormLabel}>{labelText}:</label>
      <input 
        id={id} 
        placeholder={placeholderText} 
        type={typeInput} 
        className={styles.inputFormText} 
        {...formRegister(id, { 
          required: isRequired,
          pattern: patternText,
        })}
      />
      { 
        errorValidation?.[id] && <span className={styles.inputFormValidation}>
          <>{ validatorMessage(errorValidation?.[id]?.type as string) }</>
        </span>
      }
    </div>
  );
};