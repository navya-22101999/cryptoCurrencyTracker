const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    euroValue,
    usdValue,
  } = cryptocurrencyDetails

  return (
    <li>
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
