import React, { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <div className="app-container w-[375px] max-h-[812px] bg-slate-100 dark:bg-gray-700 rounded-2xl shadow-xl overflow-y-scroll">
      {children}
    </div>
  );
};

export default AppContainer;
