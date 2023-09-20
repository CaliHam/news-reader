import search from './assets/search.png'

const Nav = () => {
  return (
    <div className="w-screen h-10 bg-blue-700 absolute top-0 flex items-center justify-end">
      <div className='pr-20 flex place-content-center'>
        <p className="text-blue-50">See articles for another date:</p>
        <input className="rounded text-blue-900 mx-3" type="date" placeholder="Search for an article"></input>
        <button><img src={search} className='object-contain w-8 h-auto'/></button>
      </div>
    </div>
  )
}

export default Nav