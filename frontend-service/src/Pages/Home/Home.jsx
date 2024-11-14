import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="bg-blue-400">
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/GameBuilder">Game Builder</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Home
