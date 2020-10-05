import React from 'react'
import { Link } from 'react-router-dom'

export default class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: {}
        }
    }
    componentDidMount() {
        console.log(this.props)
        fetch('http://localhost:7000/api/joke/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ joke: data }))
    }

    delete(id) {
        console.log(id)
        fetch('http://localhost:7000/api/joke/' + id, {
            method: 'delete'
        }).then(response => {
            response.json().then(json => {
                return json;
            })
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>{this.state.joke.title}</h3>
                    </div>
                    <div>
                        <h4><Link to="/"><span aria-hidden="true">Joke List</span></Link></h4>
                    </div>
                    <ul>
                        <li>Title</li>
                        <li>{this.state.joke.title}</li>
                        <li>Joke</li>
                        <li>{this.state.joke.joke}</li>
                    </ul>
                    <Link to={`/edit/${this.state.joke._id}`}>Edit</Link>
                    <button onClick={this.delete.bind(this, this.state.joke._id)}>Delete</button>
                </div>
            </div>
        )
    }
}