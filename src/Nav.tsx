import { Link } from 'react-router-dom';
import search from './assets/search.png'

type NavProps = {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
};

const Nav: React.FC<NavProps> = ({searchTerm, setSearchTerm}) => {


  return (
    <div className="w-screen h-10 bg-blue-700 absolute top-0 flex items-center justify-end">
      <div className='pr-20 flex place-content-center'>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="rounded text-blue-900 mx-3" placeholder='Search for an Article'></input>
        <Link to={`/searchresults/${searchTerm}`}><button><img src={search} className='object-contain w-8 h-auto'/></button></Link>
      </div>
    </div>
  )
}

export default Nav