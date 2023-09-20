import { Link } from 'react-router-dom';
import search from './assets/search.png'
import dayjs from "dayjs"

type NavProps = {
  setDate: (date: string | number | Date | dayjs.Dayjs | null | undefined) => void;
  date: string | number | Date | dayjs.Dayjs | null | undefined;
};

const Nav: React.FC<NavProps> = ({date, setDate}) => {

  const formattedDate = dayjs(date).format('YYYY-MM-DD')

  return (
    <div className="w-screen h-10 bg-blue-700 absolute top-0 flex items-center justify-end">
      <div className='pr-20 flex place-content-center'>
        <p className="text-blue-50">See articles for another date:</p>
        <input value={formattedDate} onChange={(e) => setDate(e.target.value)} className="rounded text-blue-900 mx-3" type="date"></input>
        <Link to={`/searchresults/${formattedDate}`}><button><img src={search} className='object-contain w-8 h-auto'/></button></Link>
      </div>
    </div>
  )
}

export default Nav