// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div>
      <p>Coin Type</p>
      <div>
        <p>USD</p>
        <p>EURD</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrencyData} = this.props
    return (
      <div>
        {this.renderCryptocurrenciesHeader()}
        <ul>
          {cryptocurrencyData.map(each => (
            <CryptocurrencyItem key={each.id} cryptocurrencyDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
