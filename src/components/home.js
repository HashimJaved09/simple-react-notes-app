import React, { Component } from 'react';

import Notes from './notes';
import AddNote from './addNote';

class Home extends Component {
    state = {
        notes: [
            { id: 1, author: 'Yoshi', content: 'Content 1 (click to delete)' },
            { id: 2, author: 'Mario', content: 'Content 2 (click to delete)' },
            { id: 3, author: 'Tasha', content: 'Content 3 (click to delete)' }
        ]
    };
    addNote = (note) => {
        note.id = Math.random();
        let notes = [...this.state.notes, note];
        this.setState({
            notes
        });
    };
    deleteNote = (id) => {
        const notes = this.state.notes.filter(note => {
            return note.id !== id
        });
        this.setState({ notes }); // if both key and value have the same name
    };
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1 className='light-green-text darken-4'>Notes</h1>
                    </div>
                </div>
                <Notes notes={this.state.notes} deleteNote={this.deleteNote}/>
                <AddNote addNote={this.addNote} />
            </div>
        )
    }
}

export default Home;