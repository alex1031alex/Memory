import React, {FC} from 'react';
import './App.css';
import {Moves} from "../Moves/Moves";
import {Table} from "../Table/Table";
import {Attempts} from "../Attempts/Attempts";
import {FinalMessage} from "../FinalMessage/FinalMessage";
import {CardStatus, GameStatus, initialCards, mixCards} from "../../utils";
import {CardProps} from "../../../types";

const INITIAL_MOVES_QTY = 40;
const VIEWING_TIME = 500;
const MAX_OPEN_CARDS = 2;

const emptyArray: (CardProps | never)[] = [];
const mixedCards = mixCards(initialCards);

export const App: FC = () => {
    const [cards, setCards] = React.useState(mixedCards);
    const [openCards, setOpenCards] = React.useState(emptyArray);
    const [moves, setMoves] = React.useState(INITIAL_MOVES_QTY);
    const [gameStatus, setGameStatus] = React.useState(GameStatus.PLAYING);

    React.useEffect(() => {
        if (openCards.length !== MAX_OPEN_CARDS) {
            return;
        }

        const [firstOpenedCard, secondOpenedCard] = openCards;

        const timer = setTimeout(() => {
            if (firstOpenedCard.value === secondOpenedCard.value) {
                firstOpenedCard.status = CardStatus.DELETED;
                secondOpenedCard.status = CardStatus.DELETED;
            } else {
                firstOpenedCard.status = CardStatus.CLOSED;
                secondOpenedCard.status = CardStatus.CLOSED;
            }


            const newCards = cards.slice();
            // @ts-ignore
            const firstCardIndex = newCards.findIndex((item) => item.id === firstOpenedCard.id);
            newCards[firstCardIndex] = firstOpenedCard;

            // @ts-ignore
            const secondCardIndex = newCards.findIndex((item) => item.id === secondOpenedCard.id);
            newCards[secondCardIndex] = secondOpenedCard;

            setCards(newCards);
            setOpenCards(emptyArray);
            setMoves((previousMoves) => {
                return previousMoves - 1;
            });

        }, VIEWING_TIME);

        return () => {
            clearTimeout(timer);
        }
    }, [openCards]);

    React.useEffect(() => {
        if (moves > 0) {
            return;
        }

        // @ts-ignore
        if (cards.some((card) => card.status !== CardStatus.DELETED)) {
            setGameStatus(GameStatus.LOST);
        } else {
            setGameStatus(GameStatus.WON);
        }
    }, [moves]);

    React.useEffect(() => {
        // @ts-ignore
        if (cards.every((card) => card.status === CardStatus.DELETED)) {
            setGameStatus(GameStatus.WON);
        }
    }, [cards]);

    const handleCardClick = (index: number) => {
        if (openCards.length >= MAX_OPEN_CARDS || gameStatus !== GameStatus.PLAYING) {
            return;
        }

        const newCardStatus = {...cards[index], status: CardStatus.OPENED}
        const newCards = [...cards];
        newCards[index] = newCardStatus;

        setOpenCards([...openCards, cards[index]]);
        setCards(newCards);
    };

    const resetGame = () => {
      setCards(mixCards(initialCards));
      setOpenCards(emptyArray);
      setMoves(INITIAL_MOVES_QTY);
      setGameStatus(GameStatus.PLAYING);
    };

    return (
        <React.Fragment>
            <div className="app">
                <header className="app__header header">
                        <h1 className="header__title">Memory</h1>
                </header>
                <main className="app__main main">
                        <div className="main__container">
                            <Moves count={INITIAL_MOVES_QTY - moves} />
                            <Table
                                cards={cards}
                                onCardClick={handleCardClick}
                            />
                            <Attempts count={moves} />
                            {gameStatus !== GameStatus.PLAYING ? <FinalMessage
                                isGameWon={gameStatus === GameStatus.WON}
                                count={INITIAL_MOVES_QTY - moves}
                                onBtnClick={resetGame}
                            /> : ``
                            }
                        </div>
                </main>
            </div>
        </React.Fragment>
    );
};