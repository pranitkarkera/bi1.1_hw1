import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-eight.vercel.app/books/${title}`
  );
  console.log(data);

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Author: {data.author}</p>
      <p>Release Year: {data.publishedYear}</p>
      <p>Genre: {data.genre}</p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByTitle;
