import React, {FC} from 'react';
import './Card.css';

interface Props {
    value: number;
    index: number;
    status: string;
    onCardClick: (index: number) => void;
}

export const Card: FC <Props> = ({value, index, status, onCardClick}) => {
    const onClick = () => {
        if (status !== `closed`) {
            return;
        }
        onCardClick(index);
    }

    const getClassName = () => {
        return status === `opened` ? `card-${value}` : ``;
    };

    return (
        <div className={`card ${getClassName()}`} onClick={onClick} >
        </div>
    );
}