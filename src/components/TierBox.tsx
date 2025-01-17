import React from "react";

interface TierBoxProps {
  tier: number;
}

const TierBox: React.FC<TierBoxProps> = ({ tier }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-md p-4 mb-4 gap-4">
      <span className="text-lg font-bold dark:text-white gap-0.5">سطح:</span>
      <span className="text-lg font-bold dark:text-white">سطح {tier}</span>
    </div>
  );
};

export default TierBox;
