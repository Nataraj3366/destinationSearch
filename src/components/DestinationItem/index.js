import './index.css'

const DestinationItem = props => {
  const {cityDetails} = props
  const {name, imgUrl} = cityDetails

  return (
    <li className="imgContainer">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
