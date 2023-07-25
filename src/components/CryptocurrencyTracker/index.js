// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(apiUrl)
    const result = await response.json()
    const updatedData = result.map(data => ({
      currencyLogo: data.currency_logo,
      currencyName: data.currency_name,
      euroValue: data.euro_value,
      id: data.id,
      usdValue: data.usd_value,
    }))
    this.setState({cryptocurrencyData: updatedData, isLoading: false})
  }

  renderingCurrencyData = () => {
    const {cryptocurrencyData} = this.state
    return <CryptocurrenciesList cryptocurrencyData={cryptocurrencyData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" width={50} height={50} />
          </div>
        ) : (
          this.renderingCurrencyData()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
