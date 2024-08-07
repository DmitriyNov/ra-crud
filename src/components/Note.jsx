export default function Note ( props ) {

    const { id, text, onCloseClick } = props;

    return (
        <div className="note-container">
            <p className="note-text">
                {text}
            </p>
            <button id={id} className="btn note-close" onClick={onCloseClick}>
                <span className="material-symbols-outlined">close</span>
            </button>
        </div>
    )
}
