
import "./thankyou.css"

function ThankYou(){
    return(
        <div className="finish-content">
            <img className="mobile" src="./images/illustration-thank-you.svg" /> 
            <TextContent />
        </div>
    )
}

function TextContent(){
    return(
        <div className="finish-text-content">
            <h1>
                Thank you!
            </h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )
}

export default ThankYou;