import './index.css'

const DenominationItem = ({denomination, withdraw}) => {
  const {value} = denomination
  const clickDenomination = () => {
    withdraw(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={clickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
