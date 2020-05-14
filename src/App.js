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
        link: "./assets/O'Neill.jpg",
      }, {
        name: "Carter",
        link: "./assets/Carter.jpg",
      }, {
        name: "Jackson",
        link: "./assets/Jackson.jpg",
      }, {
        name: "Teal'c",
        link: "./assets/Teal'c.jpg",
      }, {
        name: "Sheppard",
        link: "./assets/Sheppard.jpg",
      }, {
        name: "Teyla",
        link: "./assets/Teyla.jpg",
      }, {
        name: "Ronon",
        link: "./assets/Ronon.jpg",
      }, {
        name: "Mckay",
        link: "./assets/Mckay.jpg",
      },
    ]
  }

  gameFunction(e, name) {
    e.preventDefault()

    let guess = true
    for (var i = 0; i < this.state.recorded.length; i++) {
      if (name === this.state.recorded[i]) { guess = false }
    }
    if (!guess) {
      let shuffle = this.state.images
      for (let i = shuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
      }

      this.setState({ score: 0, recorded: [], message: "Game OVER", images: shuffle })

    } else {
      let allRecord = this.state.recorded
      allRecord.push(name)

      let newScore = this.state.score + 1
      let newRecord = this.state.topScore
      if (newScore > newRecord) { newRecord++ }

      let shuffle = this.state.images
      for (let i = shuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
      }

      this.setState({ score: newScore, recorded: allRecord, message: "Correct!", images: shuffle, topScore: newRecord })
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
