import correctIcon from '../../images/icons/correct.png';
import incorrectIcon from '../../images/icons/incorrect.png';
import './style.css';

export default function BottomBar({ clearselection, saveselection }) {
    return (
        <div className="bottombar">
            <img onClick={ () => saveselection() } className="bottombar-icons" src={correctIcon} alt="correct Icon"/>
            <img onClick={ () => clearselection() } className="bottombar-icons" src={incorrectIcon} alt="Incorrect Icon"/>
        </div>
    );
}