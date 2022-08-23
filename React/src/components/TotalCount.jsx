
const TotalCount = ({state}) => {
  console.log(state.state);
  
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
    <div
        className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
    >
        <p className="text-2xl font-semibold ">Total Count: {state} </p>
    </div>
</div>
  )
}

export default TotalCount