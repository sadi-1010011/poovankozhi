import './style.css';
import poovankozhi from '../../images/poovankozhi.png';
import { useNavigate } from 'react-router-dom';

export default function SuccessScreen() {
    const navigate = useNavigate();
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