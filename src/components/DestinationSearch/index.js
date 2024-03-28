import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {inputSearch: ''}

  onChangingResult = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    const {destinationsList} = this.props
    const validList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="searchInput-container">
          <input
            type="search"
            placeholder="Search"
            value={inputSearch}
            className="inputEle"
            onChange={this.onChangingResult}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-image"
          />
        </div>
        <ul className="destination-list">
          {validList.map(eachOne => (
            <DestinationItem key={eachOne.id} destinationDetails={eachOne} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
