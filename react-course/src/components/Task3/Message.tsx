import React from 'react';
import style from '../../styles/style.module.scss';

interface MessageProps {
    value: number | null;
}

const Message: React.FC<MessageProps> = ({ value }) => {
    if (value === null) {
        return <p className={style.textField}>Введите число</p>;
    }

    if (value > 0) {
        return <p className={style.textField}>Число больше нуля</p>;
    } else if (value < 0) {
        return <p className={style.textField}>Число меньше нуля</p>;
    } else {
        return <p className={style.textField}>Число равно нулю</p>;
    }
};

export default Message;