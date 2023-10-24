import './style.css';

export default function TitleBar({ choices = 3, level = 1 }) {
    return (
        <div className="titlebar">
            <div>choices : <span className="choices-value">{ choices }</span></div>
            <div>level : <span className="choices-value">{ level }</span></div>
        </div>
    );
}