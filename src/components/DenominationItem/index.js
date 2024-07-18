import './index.css'

const DenominationItem = props => {
  const {items, deleteAmount} = props
  const {id, value} = items

  const deleteItem = () => {
    deleteAmount(value)
  }
  return (
    <li>
      <button type="button" className="button" onClick={deleteItem}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
