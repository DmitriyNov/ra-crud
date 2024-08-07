import { useState } from "react";
import { update, addCard, deleteCard } from "../api/NotesAPI";
import Note from "./Note";

export default function NotesWidget () {

    const [notesList, setList] = useState([]);


    function onUpdateClick() {
        const callback = (response) => {
            setList(response);
        }
        update(callback);
    }

    function onCloseClick(event) {
        const id = event.currentTarget.id;
        const callback = () => {
            onUpdateClick();
        };
        deleteCard(id, callback);
    }

    function onAddClick(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const callback = () => {
            onUpdateClick();
        };
        addCard(data.content, callback);
        event.target[0].value = "";
}


    return (
        <div className="notes-widget">
            <div className="title-container">
                <h3 className="title">Notes</h3>
                <button className="btn title-update" onClick={onUpdateClick}>
                    <span className="material-symbols-outlined">autorenew</span>
                </button>
            </div>
            <div className="notes-container">
                {notesList.map((index) => (
                    <Note key ={index.id} id={index.id} text={index.content} onCloseClick={onCloseClick}/>
                ))}
            </div>
            <form className="new-form" onSubmit={onAddClick}>
                <label>New Note</label>
                <textarea className="new-input" name="content" type="text"/>
                <button className="btn new-update" type="submit">
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </form>
        </div>
    )
}