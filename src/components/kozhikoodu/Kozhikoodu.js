import './style.css';
import poovankozhi from '../../images/poovankozhi.png';

export default function Kozhikoodu({ kooduData, checkkoodu }) {

    return (
        <div className="kozhikoodu">
            { kooduData.map((koodu) => 
                !(koodu.clickedcorrect) ?
                    <div key={koodu.id} onClick={ () => checkkoodu(koodu) } style={ koodu.selectedkoodu ? { backgroundColor: 'grey' } : { textAlign: 'center' } } >{ 0 }</div> 
                    :
                    <img key={koodu.id} className="poovankozhi" src={poovankozhi} alt="chicken" />
                    )}
        </div>
    );
}
