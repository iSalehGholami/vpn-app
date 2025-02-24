import {
  CreditCardOutlined,
  HomeOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import React from "react";

interface BottomNavBarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const navBtnBaseClassName = `flex flex-row items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all w-full gap-2 `;
  return (
    <div className="fixed bottom-2 left-0 right-0 flex justify-center z-10">
      <div className="flex justify-center gap-4 items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl px-4 py-2 border border-gray-200 dark:border-gray-700 w-[80%]">
        <button
          onClick={() => setCurrentPage("transactions")}
          className={`${navBtnBaseClassName} ${
            currentPage === "transactions"
              ? "text-blue-500 bg-blue-100 dark:bg-blue-900"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          {/* <div className="text-xl">💳</div> */}
          <CreditCardOutlined className="text-xl" />
          {currentPage === "transactions" && (
            <span className="text-xs">تراکنش‌ها</span>
          )}
        </button>
        <button
          onClick={() => setCurrentPage("home")}
          className={`${navBtnBaseClassName} ${
            currentPage === "home"
              ? "text-blue-500 bg-blue-100 dark:bg-blue-900"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          <HomeOutlined
            className={currentPage === "home" ? "text-lg" : "text-xl"}
          />
          {currentPage === "home" && <span className="text-xs">خانه</span>}
        </button>
        <button
          onClick={() => setCurrentPage("services")}
          className={`${navBtnBaseClassName} ${
            currentPage === "services"
              ? "text-blue-500 bg-blue-100 dark:bg-blue-900"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          <ShopOutlined className="text-xl" />
          {currentPage === "services" && (
            <span className="text-xs">سرویس‌ها</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;
