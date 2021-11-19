import React, { useState } from 'react';


const Greet = () => {
    const [firstName, setFirstName] = useState("");
    const [showing, setShowing] = useState("Guest");
    

    const handleName = (e) => {
        setFirstName(e.target.value);
    }

    const handleSubmit = () => {
        setShowing(firstName);
    };

    return (
        <div>
            <h1 >{firstName}</h1>
            <h2>Hello {showing}</h2>
            <input type="text" value={firstName} onChange={handleName} />
            <button type="submit" onClick={handleSubmit}> submit</button>
        </div>
    )
}

export default Greet;