import './style.css';
import poovankozhi from '../../images/poovankozhi.png';
import chickenwinner from '../../audios/chickenwinner.mp3';
import { useNavigate } from 'react-router-dom';

export default function SuccessScreen() {
    const navigate = useNavigate();
    const audioElement = document.createElement("audio");
    audioElement.setAttribute("src", chickenwinner);
    audioElement.play();
    return (
        <div className="screen-container">
            <div className="winnerscreen-container">
                <h1 className="winner-game-title">Winner Winner <br /> Chicken Dinner !!</h1>
                <br/>
                <img src={poovankozhi} className="winner-game-image" alt="game-icon" />
                <button className="winnergame-homebtn" onClick={ () => {
                    console.log('winner !!!');
                    navigate('/startscreen');
                }}>HOME</button>
            </div>
        </div>
    );
}