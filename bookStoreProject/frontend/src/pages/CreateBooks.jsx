import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";


const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
       .post(`http://localhost:5555/books`, data)
       .then(() => {
        setLoading(false);
        navigate('/');
       })
       .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
        
       });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 bg-neutral-100 border-gray-400 rounded-xl w-96 p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Title</label>
          <input 
             type="text"
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             className="border-2 hover:bg-emerald-50 border-gray-300 px-4 py-2 rounded-xl w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Author</label>
          <input 
             type="text"
             value={author}
             onChange={(e)=> setAuthor(e.target.value)}
             className="border-2 hover:bg-emerald-50 border-gray-300 px-4 py-2 rounded-xl w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Publish Year</label>
          <input 
             type="text"
             value={publishYear}
             onChange={(e)=> setPublishYear(e.target.value)}
             className="border-2 hover:bg-emerald-50 border-gray-300 px-4 py-2 rounded-xl w-full"
          />
        </div>
        <button className="p-2 font-bold border-2 hover:bg-sky-300 border-sky-400 bg-sky-200 rounded-2xl m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks;