import React, { useState } from "react";
import BottomNavBar from "./BottomNavBar";
import HomePage from "../pages/Home";
import TransactionsPage from "../pages/Transactions";
import ServicesPage from "../pages/Services";

const MiniApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "transactions":
        return <TransactionsPage />;
      case "services":
        return <ServicesPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200">
      <div className="p-4 mb-16 overflow-scroll">{renderPage()}</div>
      <BottomNavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MiniApp;
