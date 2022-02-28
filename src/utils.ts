export const harmonizeWordEnding = (moveQty: number):string => {
  if (moveQty >= 11 && moveQty <= 14) {
    return `ходов`;
  }

  if (moveQty % 10 === 1) {
    return `ход`;
  }

  if (moveQty % 10 >=2 && moveQty % 10 <=4) {
    return `хода`;
  }

  return `ходов`;
};

export const CardStatus = {
  OPENED: `opened`,
  CLOSED: `closed`,
  DELETED: `deleted`
};

export const GameStatus = {
  PLAYING: `playing`,
  WON: `won`,
  LOST: `lost`
}

export const initialCards = [
  {
    value: 1,
    id: 0,
    status: CardStatus.CLOSED
  },
  {
    value: 1,
    id: 1,
    status: CardStatus.CLOSED
  },
  {
    value: 2,
    id: 2,
    status: CardStatus.CLOSED
  },
  {
    value: 2,
    id: 3,
    status: CardStatus.CLOSED
  },
  {
    value: 3,
    id: 4,
    status: CardStatus.CLOSED
  },
  {
    value: 3,
    id: 5,
    status: CardStatus.CLOSED
  },
  {
    value: 4,
    id: 6,
    status: CardStatus.CLOSED
  },
  {
    value: 4,
    id: 7,
    status: CardStatus.CLOSED
  },
  {
    value: 5,
    id: 8,
    status: CardStatus.CLOSED
  },
  {
    value: 5,
    id: 9,
    status: CardStatus.CLOSED
  },
  {
    value: 6,
    id: 10,
    status: CardStatus.CLOSED
  },
  {
    value: 6,
    id: 11,
    status: CardStatus.CLOSED
  },
  {
    value: 7,
    id: 12,
    status: CardStatus.CLOSED
  },
  {
    value: 7,
    id: 13,
    status: CardStatus.CLOSED
  },
  {
    value: 8,
    id: 14,
    status: CardStatus.CLOSED
  },
  {
    value: 8,
    id: 15,
    status: CardStatus.CLOSED
  }];

export const mixCards = (cards: any[]) => {

  const mixedCards = JSON.parse(JSON.stringify(cards));
  for(let i = mixedCards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
  }

  return mixedCards.slice();
};
