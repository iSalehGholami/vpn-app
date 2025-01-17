import React from "react";
import { ServiceProps } from "../types/type";

interface CardListProps {
  cards: ServiceProps[];
  onCardClick?: (index: number) => void; // Optional callback for card clicks
}

const CardList: React.FC<CardListProps> = ({ cards, onCardClick }) => {
  return (
    <div className="space-y-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-md p-4 cursor-pointer"
          onClick={() => onCardClick && onCardClick(index)} // Trigger callback if provided
        >
          <div className="flex flex-col items-start">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {card.traffic}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {card.duration} روز
            </span>
          </div>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {card.price} تومان
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardList;
