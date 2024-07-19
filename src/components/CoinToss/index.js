import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalFlip: 0,
    heads: 0,
    tails: 0,
    tossResult: 'heads',
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        totalFlip: prevState.totalFlip + 1,
        heads: prevState.heads + 1,
        tossResult: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        totalFlip: prevState.totalFlip + 1,
        tails: prevState.tails + 1,
        tossResult: 'tails',
      }))
    }
  }

  render() {
    const {totalFlip, heads, tails, tossResult} = this.state
    const isHeadsOrTails = tossResult === 'heads'
    return (
      <div className="bg-container">
        <div className="coin-toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="tossing-opt">Heads (or) Tails</p>
          <div>
            {isHeadsOrTails ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="coin-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="coin-img"
              />
            )}
          </div>
          <button
            type="button"
            onClick={this.onClickToss}
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="count-toss-container">
            <div>
              <p className="count">Total: {totalFlip}</p>
            </div>
            <div>
              <p className="count">Heads: {heads}</p>
            </div>
            <div>
              <p className="count">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
