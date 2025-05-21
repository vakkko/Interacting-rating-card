import "./App.css";
import StarImg from "./StarImg";
import MainContent from "./MainContent";
import ThankYou from "./ThankYou";
import React, { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);

  if (selectedValue && isSubmited) return <ThankYou selectedValue={selectedValue} />;

  return (
    <div>
      <StarImg />
      <MainContent
        setSelectedValue={setSelectedValue}
        setIsSubmited={setIsSubmited}
      />
    </div>
  );
}

export default App;
