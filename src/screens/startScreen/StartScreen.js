import './style.css';
import { Link } from 'react-router-dom';
import poovankozhi from '../../images/poovankozhi.png';

export default function StartScreen() {
    return (
        <div className="screen-container">
            <div className="game-header">
                <h1 className="game-title">kozhikoodu</h1>
                <img src={poovankozhi} className="game-image" alt="game-icon" />
            </div>
            <div className="game-options">
                <button>
                    <Link className="to-link" to="/setgamescreen">start game</Link>
                </button>
                {/* <button>choose level</button> */}
                <button>
                    <Link className="to-link" to="/settingsscreen">settings</Link>
                </button>
            </div>
        </div>
    );
}