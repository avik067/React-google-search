// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {keyW: '', value: ''}

  trigger = event => {
    const keyWord = event.target.value.toLowerCase()

    this.setState({keyW: keyWord, value: event.target.value})
  }

  place = text => this.setState(pre => ({keyW: text, value: text}))

  render() {
    const {suggestionsList} = this.props
    const {keyW} = this.state

    const finalSearchArray = suggestionsList.filter(item => {
      const lower = item.suggestion.toLowerCase()
      return lower.includes(keyW)
    })
    const {value} = this.state

    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="img"
        />
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="icon"
          />
          <input
            type="search"
            placeholder="Search Google"
            onChange={this.trigger}
            value={value}
          />
          <ul>
            {finalSearchArray.map(item => (
              <SuggestionItem
                details={item}
                key={item.id}
                action={this.place}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
