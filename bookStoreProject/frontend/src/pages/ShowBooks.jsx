import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);
    axios
       .get(`http://localhost:5555/books/${id}`)
       .then((response) => {
        setBook(response.data.data);
        setLoading(false);
       })
       .catch((error) => {
        console.log(error);
        setLoading(false);
       })
  }, [id]);
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-4xl my-4">Show Book</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <div className="flex flex-col border-2 bg-neutral-100 border-gray-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id :</span>
            <span className="font-semibold">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title :</span>
            <span className="font-semibold">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author :</span>
            <span className="font-semibold">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year :</span>
            <span className="font-semibold">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time :</span>
            <span className="font-semibold">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Updated Time :</span>
            <span className="font-semibold">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBooks;