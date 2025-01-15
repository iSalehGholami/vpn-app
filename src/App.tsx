import { useState } from "react";
import "./App.css";
import { BackButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";
function App() {
  const popup = useShowPopup();
  const [showBack, setshowBack] = useState(false);
  const toggleBack = () => {
    setshowBack(!showBack);
    alert("Backbutton is now " + showBack);
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
