import React, { useRef } from 'react';
import style from '../../styles/style.module.scss';

const FieldValue = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value !== '') {
      console.log(inputRef.current.value);
    }else if(inputRef.current && inputRef.current.value === ''){
        console.log('Строка пуста!');
    }
  };

  return (
    <>
    <h2>Задание 1(FieldValue)</h2>
    <form onSubmit={handleSubmit}>
      <label className={style.textField}>
        Введите значение
        <input type="text" ref={inputRef} className={style.input}/>
      </label>
      <button type="submit">Отправить</button>
    </form>
    </>
  );
};

export default FieldValue;
