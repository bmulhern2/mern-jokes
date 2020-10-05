import React from 'react'
import { Link } from 'react-router-dom'

export default class Create extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            joke: ''
        }
    }
    onTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }
    onJokeChange = (e) => {
        this.setState({ joke: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let newJoke = {
            title: this.state.title,
            joke: this.state.joke
        }
        fetch('http://localhost:7000/api/jokes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(newJoke),
        })
    }
    render() {
        const { title, joke } = this.state
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Joke
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Joke List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" name="title" value={title} onChange={this.onTitleChange} placeholder="Title" />      
                            </div>
                            <div class="form-group">
                                <label for="joke">Joke</label>
                                <input type="text" class="form-control" name="joke" value={joke} onChange={this.onJokeChange} placeholder="Joke" />
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}