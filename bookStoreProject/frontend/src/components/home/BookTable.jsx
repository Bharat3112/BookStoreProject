import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookTable = ({bookTableProps}) => {
  return (
    <table className='w-full border-collapse border-gray-400'>
                <thead className='text-xl bg-neutral-200'>
                    <tr>
                        <th className='border border-slate-600 '>No</th>
                        <th className='border border-slate-600 '>Title</th>
                        <th className='border border-slate-600 max-md:hidden'>Author</th>
                        <th className='border border-slate-600 max-md:hidden'>Publish Year</th>
                        <th className='border border-slate-600 '>Operations</th>
                    </tr>
                </thead>
                <tbody className='text-gray-600 text-xl bg-slate-50'>
                    {bookTableProps.map((book, index)=>(
                        <tr key={book._id} className='h-8 hover:bg-indigo-50'>
                            <td className='border border-slate-700 text-center'>{index+1}</td>
                            <td className='border border-slate-700 text-center'>{book.title}</td>
                            <td className='border border-slate-700 text-center max-md:hidden'>{book.author}</td>
                            <td className='border border-slate-700 text-center max-md:hidden'>{book.publishYear}</td>
                            <td className='border border-slate-700 text-center'>
                                <div className='flex justify-around'>
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800'/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600'/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600'/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default BookTable;