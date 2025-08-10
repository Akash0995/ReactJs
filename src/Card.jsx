import skySportPic from './assets/skysportspic.png'

function Card()
{
    return(
        <div className="card">
            <img src={skySportPic} alt="clnpicture" className="card-image"></img>
            <h2 className="card-title">Sky Sports</h2>
            <p className="card-text">I like to Watch as well as Playing Cricket</p>
        </div>
        
    );

}
export default Card