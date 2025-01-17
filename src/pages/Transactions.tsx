import React from "react";

const TransactionsPage: React.FC = () => {
  const transactions = [
    { id: 1, amount: "100,000 تومان", date: "2025-01-01", status: "موفق" },
    { id: 2, amount: "50,000 تومان", date: "2025-01-05", status: "ناموفق" },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">تراکنش‌ها</h2>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg flex justify-between"
          >
            <span>{transaction.date}</span>
            <span>{transaction.amount}</span>
            <span
              className={`${
                transaction.status === "موفق"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
