import './index.css'

const SearchItems = props => {
  const {userDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="item-container">
      <div className="image-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain-name">{domainUrl}</p>
      </div>

      <button
        type="button"
        data-testid="delete"
        onClick={onDelete}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchItems
