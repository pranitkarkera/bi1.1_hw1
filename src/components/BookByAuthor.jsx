import useFetch from "../useFetch";

const BookByAuthor = () => {

    const {data, loading, error} = useFetch(`https://be-4-assignment1-eight.vercel.app/books/${author}`)

    return(
        <div>
            data?(
                <div>
                    <h2>{data.author}</h2>
                    <p>Title: {data.title}</p>
                    <p>Genre: {data.genre}</p>
                    <p>Language: {data.language}</p>
                    <p>Country: {data.country}</p>
                    <p>Rating: {data.rating}</p>
                    <p>Summary: {data.summary}</p>
                    <img src={data.coverImageUrl} alt="Cover Image Url"/>
                </div>
            ) : (
                loading && <p>Loading...</p>
            )
        </div>
    )
}

export default BookByAuthor;