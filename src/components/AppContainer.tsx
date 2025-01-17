import React, { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <div className="app-container w-[375px] bg-slate-100 dark:bg-gray-700 rounded-2xl shadow-xl ">
      {children}
    </div>
  );
};

export default AppContainer;
