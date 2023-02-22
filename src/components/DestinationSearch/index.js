import {useState} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props

  const [searchInput, setSearchInput] = useState('')
  console.log(searchInput)

  return (
    <div>
      <div className="container">
        <h1>Destination Search</h1>
        <div className="searchInput">
          <input
            placeholder="search"
            type="search"
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
          />
          <img
            className="searchIcon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
      </div>
      <div>
        <ul>
          {destinationsList
            .filter(eachCity =>
              eachCity.name.toLowerCase().includes(searchInput.toLowerCase()),
            )
            .map(eachCity => (
              <DestinationItem cityDetails={eachCity} key={eachCity.id} />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default DestinationSearch
