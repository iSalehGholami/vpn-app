import React from "react";
import { Button } from "antd";

interface BalanceBoxProps {
  balance: number;
  currency: string;
  onAddBalance: () => void;
}

const BalanceBox: React.FC<BalanceBoxProps> = ({
  balance,
  currency,
  onAddBalance,
}) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-md p-4 mb-4">
      <div className="text-lg font-bold dark:text-white">موجودی ریالی</div>
      <div className="flex gap-4">
        <div className="text-lg font-bold dark:text-white">
          {balance.toLocaleString()} {currency}
        </div>
        <Button type="primary" onClick={onAddBalance}>
          +
        </Button>
      </div>
    </div>
  );
};

export default BalanceBox;
