import "./SearchInput.css"

const SearchInput = ({action,type,text,placeholder}) => {
  return (
    <div>
        <form>
            <input placeholder={placeholder} onChange={action} type={type} value={text}/>
        </form>
    </div>
  )
}

export default SearchInput