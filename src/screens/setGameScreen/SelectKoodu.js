import poovankozhi from '../../images/poovankozhi.png';

export default function SelectKoodu({ kooduData, selectkoodu }) {

    return (
        <div className="kozhikoodu">
            { kooduData.map((koodu) => 
                !(koodu.iskozhi) ? <div key={koodu.id} onClick={ () => selectkoodu(koodu) } >{ koodu.value }</div> : <img key={koodu.id} className="poovankozhi" src={poovankozhi} alt="chicken"/>
            )}
        </div>
    );
}
