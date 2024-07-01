import React, {useState} from 'react';
import style from '../../styles/style.module.scss';
import Message from './Message';

const InputNumber: React.FC = () => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(event.target.value);
    if (!isNaN(num)) {
      setValue(num);
    } else {
      setValue(null);
    }
  };

  return (
    <div className={style.container}>
      <h2>Задание 3(InputNumber)</h2>
      <input type="number" onChange={handleChange} className={style.input}/>
      <Message value={value} />
    </div>
  );
};

export default InputNumber;