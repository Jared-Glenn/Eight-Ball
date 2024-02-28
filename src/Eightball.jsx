import React, { useState } from 'react';
import './Eightball.css';

const Eightball = (props) => {
    const resNum = props.responses.length;
    const randIndex = () => {
        return Math.floor(Math.random() * resNum);
    }
    
    const initialRes = { msg: "Think of a Question", color: "black" };
    const [response, setResponse] = useState(initialRes);
    
    return (
        <>
        <div className={`eightball`} style={{backgroundColor: response.color}} onClick={() => setResponse(props.responses[randIndex()])}>
            <h3 className="eightball-message">{response.msg}</h3>
        </div>
        </>
    )
};

Eightball.defaultProps = {
    responses: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}


export default Eightball;