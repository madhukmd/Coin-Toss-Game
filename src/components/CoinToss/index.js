import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    status: true,
  }

  tossChange = () => {
    const tossResult = Math.floor(Math.random() * 2)

    switch (tossResult) {
      case 0:
        this.setState(prevState => ({heads: prevState.heads + 1}))
        this.setState({status: true})
        break
      case 1:
        this.setState(prevState => ({tails: prevState.tails + 1}))
        this.setState({status: false})
        break
      default:
        console.log('ok')
    }

    // const {heads, tails} = this.state
    this.setState(prevState => ({total: prevState.heads + prevState.tails}))
  }

  render() {
    const {total, heads, tails, status} = this.state
    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>

          {status ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-image"
            />
          )}

          <button type="button" className="button" onClick={this.tossChange}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
