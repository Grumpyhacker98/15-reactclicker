import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TarrotCard from './components/TarrotCard';

import images from './img/CardImgFile'

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    message: "Click to begin",
    recorded: [],
  }

  // gameFunction(e, name) {
  //   e.preventDefault()

  //   let guess = true
  //   for (var i = 0; i < this.state.recorded.length; i++) {
  //     if (name === this.state.recorded[i]) { guess = false }
  //   }
  //   if (!guess) {
  //     let shuffle = this.state.images
  //     for (let i = shuffle.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  //     }

  //     this.setState({ score: 0, recorded: [], message: "Game OVER", images: shuffle })

  //   } else {
  //     let allRecord = this.state.recorded
  //     allRecord.push(name)

  //     let newScore = this.state.score + 1
  //     let newRecord = this.state.topScore
  //     if (newScore > newRecord) { newRecord++ }

  //     let shuffle = this.state.images
  //     for (let i = shuffle.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  //     }

  //     this.setState({ score: newScore, recorded: allRecord, message: "Correct!", images: shuffle, topScore: newRecord })
  //   }
  // }


  render() {
    return (
      <div>
        {/* navbar/statusbar */}
        <form className="form-inline">
          <h2 className="p-2">Score: {this.state.score}</h2>
          <h2 className="p-2">Top Score: {this.state.topScore}</h2>
          <h2 className="p-2">{this.state.message}</h2>
        </form>
        {/* tarot main container */}
        <div className="d-inline-flex flex-wrap justify-content-center">
          {images.map((card) => (
            <div key={card.id} className="border tarot">
              <TarrotCard {...card} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;