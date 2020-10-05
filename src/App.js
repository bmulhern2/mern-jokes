import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:7000/api/jokes')
      .then(response => response.json())
      .then(data => this.setState({ jokes: data }))
  }
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading" id="header">
            <h3 class="panel-title">
              Jokes
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add Joke</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {this.state.jokes.map(joke =>
                  <tr>
                    <td><Link to={`/show/${joke._id}`}>{joke.title}</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
