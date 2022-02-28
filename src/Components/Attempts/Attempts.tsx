import React, {FC} from 'react';
import './Attempts.css';

interface Props {
    count: number;
}

export const Attempts: FC<Props> = ({count}) => {
    return (
        <div className="attempts">
            <h2 className="title attempts__title">Осталось попыток</h2>
            <span className="attempts__counter counter">{count}</span>
        </div>
    )
};