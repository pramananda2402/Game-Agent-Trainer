
import { Link } from 'react-router-dom'

const GameBuilder = () => {
  return (
    <div className='p-10'>
        <div className='text-yellow-500'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        </div>
        <div className='flex flex-col w-full min-h-screen gap-5'>
            <div className='flex gap-2 h-[400px] '>
                <div className='w-1/4 bg-zinc-300'>
                    SideBar
                </div>
                <div className='w-3/4 bg-gray-300'>
                    GameBoard
                </div>
            </div>
            <div className='h-[600px] bg-gray-200'>
                Code manue
            </div>
        </div>
      
    </div>
  )
}

export default GameBuilder
