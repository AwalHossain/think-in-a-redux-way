
const Button = ({children, handler}) => {
  return (
    <div>
    <button
        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        id="increment"
        onClick={handler}
    >
     {children}
    </button>
  
    </div>
  )
}

export default Button