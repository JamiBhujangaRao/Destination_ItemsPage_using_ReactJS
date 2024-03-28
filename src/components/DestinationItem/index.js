import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-items">
      <img src={imgUrl} className="items-image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
