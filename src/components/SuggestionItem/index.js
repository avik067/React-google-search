// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, action} = props
  const {suggestion} = details

  const placeToInput = () => action(suggestion)

  return (
    <li>
      <p>{suggestion}</p>
      <div>
        <img
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          onClick={placeToInput}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
