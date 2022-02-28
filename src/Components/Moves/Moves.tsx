import React, {FC} from 'react';
import './Moves.css';

interface Props {
    count: number;
}

export const Moves: FC<Props> = ({count}) => {
  return (
      <div className="moves">
          <h2 className="title moves__title">Сделано ходов</h2>
          <span className="moves__counter counter">{count}</span>
      </div>
  )
};