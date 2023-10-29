import { useRef } from 'react';
import Poovankozhi from '../../images/poovankozhi.png';
import './style.css';

export default function LoadingScreen() {

    function loadinganimation() {
        console.log('loading animation running..')
    }

    const ref = useRef();
    setTimeout(function(){
        ref.current.style.width = "100%";
    }, 3000);

    return (
        <div className="loadingscreen">
            <div className="loading-wrapper" ref={ ref }>
                <img className="loading-img" src={Poovankozhi} alt="loading-img" />
                <div className="loadingbar"></div>
            </div>
        </div>
    );
}