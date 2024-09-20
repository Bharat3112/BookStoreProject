import BookSingleCard from "./BookSingleCard";

const BookCard = ({bookCardProps}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bookCardProps.map((item)=>(
            <BookSingleCard key={item._id} bookSingleCardProps={item}/>
        ))}
    </div>
  )
}

export default BookCard;