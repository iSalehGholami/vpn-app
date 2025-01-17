import React, { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";
import MiniApp from "./components/MiniApp";
import Notice from "./components/Notice";
import WebApp from "@twa-dev/sdk";
const App: React.FC = () => {
  const [isRunningWithTelegramBrowser, setIsRunningWithTelegramBrowser] =
    useState(false);
  useEffect(() => {
    // Check if WebApp SDK is available and only use it on the client side
    if (WebApp.initDataUnsafe.user) {
      setIsRunningWithTelegramBrowser(true);
    }
  }, []);

  return (
    <div>
      <AppContainer>
        {/* {isRunningWithTelegramBrowser ? <MiniApp /> : <Notice />} */}
        <MiniApp />
      </AppContainer>
    </div>
  );
};

export default App;
