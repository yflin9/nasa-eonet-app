import spinner from "../star-spinner.gif"

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h3>Fetching Data</h3>
    </div>
  )
}

export default Loader
