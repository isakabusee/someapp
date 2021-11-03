import React, { useState } from 'react';







const Greet = ({ setHeaderText }) => {
    const [firstName, setFirstName] = useState("");

    const handleName = (e) => {
        setFirstName(e.target.value);
    }

    const handleSubmit = () => {
        // setHeaderText(firstName);
        console.log("something has been submitted")
    };

    return (
        <div>
            <input type="text" value={firstName} onChange={handleName} />
            <button type="submit" onClick={handleSubmit}> submit</button>
        </div>
    )
}

export default Greet;