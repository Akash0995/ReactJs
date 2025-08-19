
function Button()
{
    let count = 0;  
    const handleClick = (e) => 
        {
            console.log(e);
            e.target.textContent = "Outch! 👍" ;
        }
    /*
    const handleClick = (name) => 
    {
        if(count<3)
        {
            count++;
            console.log(`${name} you clicked me ${count} times` );
        }
        else
        {
            console.log(`${name} stop clicking me!`);
        }
    }*/
    //console.log("Akash");
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    return (
    <button onDoubleClick={ (e) => handleClick(e)}>
       Click Me 😁  
    </button>
);
}
export default Button