// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {Heads: 0, headsCount: 0, tailsCount: 0}

  tossCoin = () => {
    const randomResult = Math.floor(Math.random() * 2)
    this.setState(prev => ({
      Heads: randomResult,
      headsCount: prev.headsCount + (randomResult === 0 ? 1 : 0),
      tailsCount: prev.tailsCount + (randomResult === 1 ? 1 : 0),
    }))
  }

  render() {
    const {Heads, headsCount, tailsCount} = this.state

    return (
      <div className="coin-toss-bg">
        <div className="coin-toss-container">
          <h1 className="coin-toss-title">Coin Toss Game</h1>
          <p className="coin-toss-sub-title">Heads (or) Tails</p>
          {Heads === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="coin-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="coin-image"
            />
          )}

          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="heads-tails-count">
            <p className="count-list">Total: {headsCount + tailsCount}</p>
            <p className="count-list">Heads: {headsCount}</p>
            <p className="count-list">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
