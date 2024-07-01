import React, { useState } from 'react';
import style from '../../styles/style.module.scss';

interface TextToggleProps {
  text: string;
}

const MoreDetailsButton: React.FC<TextToggleProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const firstSentence = text.split('. ')[0] + '.';

  return (
    <div className={style.container}>
      <h2>Задание 2(MoreDetailsButton)</h2>
      <p className={style.textField}>{isExpanded ? text : firstSentence}</p>
      <button onClick={toggleText}>
        {isExpanded ? 'Скрыть' : 'Показать подробнее'}
      </button>
    </div>
  );
};

export default MoreDetailsButton;
