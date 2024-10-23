import useFetch from "../useFetch";

const Books = () => {

    const {data, loading, error} = useFetch("https://be-4-assignment1-eight.vercel.app/books")

    return(
        <div>
            <ul>
                {data?.map((book)=>(
                    <li>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Books;