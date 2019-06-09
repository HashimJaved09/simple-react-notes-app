import React,{ Component } from 'react';

class AddNote extends Component {
    state = {
        author: '',
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        });
    };
    handleSubmit = (e) => {
       e.preventDefault();
       if (this.state.author && this.state.content) {
           this.props.addNote(this.state);
           this.setState({
               author: '',
               content: ''
           });
       } else alert('Please fill in all fields!');
    };
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="author">Auhor:</label>
                        <input id='author' type="text" onChange={this.handleChange} value={this.state.author} />
                        <label htmlFor="content">Content:</label>
                        <input id='content' type="text" onChange={this.handleChange} value={this.state.content} />
                        <button onClick={this.handleSubmit} className='btn white-text darken-4'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddNote;