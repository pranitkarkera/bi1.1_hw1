import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-eight.vercel.app/books/author/${author}`
  );
  console.log(data);

  return data ? (
    <div>
      <h2>Books by {data.author}</h2>
      <p>Title: {data.title}</p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByAuthor;