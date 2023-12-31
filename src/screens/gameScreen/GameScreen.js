import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Kozhikoodu from '../../components/kozhikoodu/Kozhikoodu';
import TitleBar from '../../components/titlebar/TitleBar';
// import LoadingScreen from '../loadingScreen/LoadingScreen';
import chickencry2s from '../../audios/chickencry2s.mp3';
import kooduData from '../../data/kooduData';
import './style.css';

export default function GameScreen() {
    
    const { state } = useLocation();
    const navigate = useNavigate();
    const correctKoodu = state;

    kooduData.forEach(function(item) {
        item.clickedcorrect = false;
        if (item.value === correctKoodu) {
            item.iskozhi = false;
            item.selectedkoodu = false;
        }
    });
    
    let newObj = [...kooduData];
    let [localkooduData, setLocalkooduData] = useState([...newObj]);
    let [choices, setChoices] = useState(5);
    let [level, setLevel] = useState(1);


    function checkkoodu(koodu) {
        const clickedKoodu = koodu.value;
        let leftchoices = choices;
        if (leftchoices < 1) {
            alert('0 choices left!');
            return false;
        }
        if (clickedKoodu === correctKoodu) {
            console.log('correct Koodu !')
            // CORRECT -----------

            // alert('correct koodu');
            let newObj = [...localkooduData];
            newObj.forEach(function(item){
                if (item.value === clickedKoodu) {
                    item.clickedcorrect = true;
                }
            });
            setLocalkooduData(newObj);
            navigate('/successscreen');
        }
        else {
            console.log('Incorrect Koodu !')
            // INCORRECT -----------
            const audioElement = document.createElement("audio");
            audioElement.setAttribute("src", chickencry2s);
            audioElement.play();
            let newObj = [...localkooduData];
            newObj.forEach(function(item){
                if (item.value === clickedKoodu) {
                    item.selectedkoodu = true;
                }
            });

            // Update values
            leftchoices = choices - 1;
            setChoices(leftchoices);
            setLocalkooduData(newObj);
        }
    }

    return (
        // <LoadingScreen/>
        <div className="screen-container-gamescreen">
            <TitleBar choices={choices} level={level} />
            <Kozhikoodu kooduData={localkooduData} checkkoodu={checkkoodu}  />
        </div>
    );
}