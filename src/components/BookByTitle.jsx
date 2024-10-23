import useFetch from "../useFetch";

const BookByTitle = () => {

    const {data, loading, error} = useFetch(`https://be-4-assignment1-eight.vercel.app/books/${title}`)

    return(
        <div>
            data?(
                <div>
                    <h2>{data.title}</h2>
                    <p>Author: {data.author}</p>
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

export default BookByTitle