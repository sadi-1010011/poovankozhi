import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectKoodu from './SelectKoodu';
import BottomBar from '../../components/bottombar/BottomBar';
import kooduData from '../../data/kooduData';
import './style.css';

export default function SetGameScreen() {

    let navigate = useNavigate();
    let [localkooduData, setLocalkooduData] = useState([...kooduData]);

    function selectkoodu(koodu) {
        let id = koodu.id;
        let newObj = [...localkooduData];
        newObj.forEach(function(item) {
            if(item.id === id) {
                item.selectedkoodu = true;
                item.iskozhi = true;
                // console.log(item)
            } else {
                item.selectedkoodu = false;
                item.iskozhi = false;
            }
        });  // save to state
        setLocalkooduData(newObj);
    }

    function clearselection() {
        // clear selected koodu
        console.log("cleared selection!");
        let newObj = [...localkooduData];
        newObj.forEach(function(item) {
                item.selectedkoodu = false;
                item.iskozhi = false;
            }
        );  // save to state
        setLocalkooduData(newObj);
    }

    function saveselection() {
        console.log('saving selection');
        let newObj = [...localkooduData];
        let selectedkoodunum;
        newObj.forEach(function(item) {
            if (item.selectedkoodu) selectedkoodunum = item.value;
            // else selectedkoodunum = false; !BUGGG
        });
        navigate('/gamescreen', { state: selectedkoodunum });
    }

    return (
        <div className="screen-container">
            <h3 className="setgame-title">Put the chicken inside any box :</h3>
            <SelectKoodu kooduData={localkooduData} selectkoodu={selectkoodu} clearselection={clearselection} />
            <BottomBar clearselection={clearselection} saveselection={saveselection} />
        </div>
    );
}