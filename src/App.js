import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    message: "Click to begin",
    recorded: [],
    images: [
      {
        name: "O'Neill",
        link: "../O'Neill.jpg",
      }, {
        name: "Carter",
        link: "../Carter.jpg",
      }, {
        name: "Jackson",
        link: "../Jackson.jpg",
      }, {
        name: "Teal'c",
        link: "../Teal'c.jpg",
      }, {
        name: "Sheppard",
        link: "../Sheppard.jpg",
      }, {
        name: "Teyla",
        link: "../Teyla.jpg",
      }, {
        name: "Ronon",
        link: "../Ronon.jpg",
      }, {
        name: "Mckay",
        link: "../Mckay.jpg",
      },
    ]
  }

  gameFunction(e, name) {
    e.preventDefault()
    console.log(name)

    let guess = true
    for (var i = 0; i < this.state.recorded.length; i++) {
      console.log(this.state.recorded[i])
      if (name === this.state.recorded[i]) { guess = false }
    }
    if(!guess){
      // reset game defeat
    } else {

    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Clicky Game!</h3>
          <p>
            Click on an image to earn points, but don't click on any more than once!
        </p>
          <h4>\|/</h4>
        </header>
        <div className="App-header blue">
          <div className="aqua p-5">
            <form className="form-inline">
              <h2 className="p-2">Score: {this.state.score}</h2>
              <h2 className="p-2">Top Score: {this.state.topScore}</h2>
              <h2 className="p-2">{this.state.message}</h2>
            </form>
          </div>
          <div className="d-flex flex-wrap">
            {this.state.images.map((res, i) => (
              <div key={i} className="border p-2 m-5" onClick={e => this.gameFunction(e, res.name)}>
                <img src={res.link || "..//placeholder.png"} alt=" " />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
