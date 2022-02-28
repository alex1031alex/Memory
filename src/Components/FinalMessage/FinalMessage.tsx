import React, {FC} from 'react';
import './FinalMessage.css';
import {harmonizeWordEnding} from "../../utils";

interface Props {
    isGameWon: boolean;
    count: number;
    onBtnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const FinalMessage: FC<Props> = ({isGameWon, count, onBtnClick}) => {
    const Text = {
        WON: <p className="final-message__text">Ура, Вы выиграли!<br /> Это заняло {count} {harmonizeWordEnding(count)}</p>,
        LOST: <p className="final-message__text">Увы, вы проиграли<br /> у вас кончились ходы</p>
    };

    return (
        <div className="final-message">
            {isGameWon ? Text.WON : Text.LOST}
            <button className="final-message__button" onClick={onBtnClick}>Сыграть еще</button>
        </div>
    );
};