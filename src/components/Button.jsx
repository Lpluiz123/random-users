import "./Button.css"

const Button = ({action, name}) => {
  return (
    <div>
        <button onClick={action}>{name}</button>
    </div>
  )
}

export default Button