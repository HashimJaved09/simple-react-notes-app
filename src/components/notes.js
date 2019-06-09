import React from 'react';

const Notes = ({notes, deleteNote}) => {

    const notesList = notes.length ? (
        notes.map(note => {
            return (
                <div className='collection-item orange-text' key={note.id}>
                    <span onClick={() => {deleteNote(note.id)}}>{note.id} {note.content}</span>
                </div>
            )
        })
        ) : (
        <p>No Notes Available!</p>
    );
    return (
        <div className="row">
            <div className="col-sm-12">
                { notesList }
            </div>
        </div>
    )
};

export default Notes;