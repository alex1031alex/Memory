import React, {FC} from 'react';
import './Table.css';
import {Card} from "../Card/Card";
import {CardProps} from "../../../types";

interface Props {
    cards: CardProps[];
    onCardClick: (index: number) => void;
}

export const Table: FC <Props> = ({cards, onCardClick}) => {

    return (
        <div className="table">
            {cards.map((item, index) => {
                if (item.status === `deleted` ) {
                    return <div key={item.id}>{``}</div>;
                }

                return <Card
                    key={item.id}
                    index={index}
                    value={item.value}
                    status={item.status}
                    onCardClick={onCardClick}
                />;
            })}
        </div>
    )
};