import { useState } from "react";
import BackButton from "../components/backButton";
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
        .delete(`http://localhost:5555/books/${id}`)
        .then(() => {
          setLoading(false);
          navigate('/')
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
      <h1 className="text-4xl my-4">Delete Book</h1>
      { loading ? <Spinner /> : '' }
      <div className="flex flex-col items-center border-2 bg-neutral-100 border-gray-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to Delete This Book?</h3>
        <button 
        className="p-3 font-bold border-2 hover:bg-red-700 border-red-900 bg-red-600 rounded-2xl text-white m-8 w-full"
        onClick={handleDeleteBook}
        >Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBooks;