import { useState } from "react";
import "./App.css";
import {
  BackButton,
  useShowPopup,
  useWebApp,
} from "@vkruglikov/react-telegram-web-app";
function App() {
  const popup = useShowPopup();
  const [showBack, setshowBack] = useState(false);
  const webapp = useWebApp();
  const toggleBack = () => {
    setshowBack(!showBack);
  };

  return (
    <div>
      <h3>Welcome to my App</h3>
      <div onClick={toggleBack} style={{ color: showBack ? "green" : "red" }}>
        ClickMe!
      </div>
      <div>
        {showBack ?? (
          <BackButton
            onClick={() => {
              popup({
                message: "Salam",
                title: "popup",
              });
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
