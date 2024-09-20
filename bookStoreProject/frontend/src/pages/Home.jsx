import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BookTable from '../components/home/BookTable.jsx';
import BookCard from '../components/home/BookCard.jsx';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setshowType] = useState('table');
    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/books`)
        .then((response)=>{
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }, []);
  return (
    <div className='p-4'>
        <h1 className='text-5xl text-center font-semibold text-gray-400'>Book Store</h1>
        <div className='flex justify-center items-center gap-x-4'>
        <button className="p-2 font-bold border-2 hover:bg-sky-300 border-sky-400 bg-sky-200 rounded-2xl m-8" 
            onClick={()=> setshowType('table')}>BookTable</button>
        <button className="p-2 font-bold border-2 hover:bg-sky-300 border-sky-400 bg-sky-200 rounded-2xl m-8" 
            onClick={()=> setshowType('card')}>BookCard</button>
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl my-8'>Books List</h1>
            <Link to={'/books/create'}>
                <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
        </div>
        {loading ? <Spinner/> : showType === 'table' ? (<BookTable bookTableProps={books} />) : (<BookCard bookCardProps={ books } />)}
    </div>
  )
}

export default Home;