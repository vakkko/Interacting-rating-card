import "./thankyou.css";

function ThankYou(props) {
  return (
    <div className="finish-content">
      <img
        className="mobile"
        alt="mobile"
        src="./images/illustration-thank-you.svg"
      />
      <p className="rating">You selected {props.selectedValue} out of 5</p>
      <TextContent />
    </div>
  );
}

function TextContent() {
  return (
    <div className="finish-text-content">
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
