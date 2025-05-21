import "./main-content.css";

function MainContent({ setSelectedValue, setIsSubmited }) {
  const handleClick = (number) => {
    setSelectedValue(number);
  };

  const handleSubmit = () => {
    setIsSubmited((prev) => !prev);
  };

  return (
    <div className="main-content">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btn-container">
        <Button number={1} onClick={handleClick} />
        <Button number={2} onClick={handleClick} />
        <Button number={3} onClick={handleClick} />
        <Button number={4} onClick={handleClick} />
        <Button number={5} onClick={handleClick} />
      </div>
      <button onClick={handleSubmit} className="btn-submit">
        SUBMIT
      </button>
    </div>
  );
}

function Button({ number, onClick }) {
  return (
    <button className="btn" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default MainContent;
