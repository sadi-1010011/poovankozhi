import { useNavigate } from 'react-router-dom';
import backicon from '../../images/back.png';
import poovankozhi from '../../images/poovankozhi.png';
import './style.css';

export default function SettingsScreen() {

    let navigate = useNavigate();

    return (
        <div className="screen-container">
            <div className="game-header">
                <h1 className="game-title">kozhikoodu</h1>
                <img src={poovankozhi} className="game-image" alt="game image" />
            </div>
            <div className="game-options">
                <h3>option 1</h3>
                <h3>option 2</h3>
                <h3>option 3</h3>
            </div>
            <div className="floating-backbtn" onClick={ () => navigate(-1) }>
                <img src={backicon} alt="back button" />
            </div>
        </div>
    );
}