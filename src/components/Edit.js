import React from 'react'
import { Link } from 'react-router-dom'

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: {}
        }
    }
    componentDidMount() {
        fetch('http://localhost:7000/api/joke/'+this.props.match.params.id).then(response => {
            response.json().then(data => {
                this.setState({ joke: data })
            })
        })
    }
    onTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }
    onJokeChange = (e) => {
        this.setState({ joke: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        let editedJoke = {
            title: this.state.title,
            joke: this.state.joke
        }
        fetch('http://localhost:7000/api/joke/'+this.props.match.params.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedJoke)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>
                            Edit Joke
                        </h3>
                    </div>
                    <div>
                        <h4><Link to={`/show/${this.state.joke._id}`}>Joke</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label for="title">Title: </label>
                                <textarea name="title" value={this.state.joke.title} onChange={this.onTitleChange} placeholder="Title" />
                            </div>
                            <div>
                                <label for="joke">Joke: </label>
                                <textarea name="joke" value={this.state.joke.joke} onChange={this.onJokeChange} placeholder="Joke" />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}