import React, {useState} from 'react'

function MyComponent()
{
    const [name, setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);
    const incrementAge = () =>
    {
        setAge(age+1);
    }
    const updateName = () =>
    {
        setName("Akash");
    }
    const ckeckEmployed = () =>
    {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>SetAge</button>

            <p>Is Employed: {isEmployed ? "Yes":"No"}</p>
            <button onClick={ckeckEmployed}>IsEmployed</button>
        </div>
    );
}
export default MyComponent