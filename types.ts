export interface CardProps {
    value: number;
    index: number;
    id: number;
    status: string;
    onCardClick: (index: number) => void;
}
