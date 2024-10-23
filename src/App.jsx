import "./App.css";
import Books from "./components/Books";
import BookByTitle from "./components/BookByTitle";
import BookByAuthor from "./components/BookByAuthor";

export default function App(){
    return(
        <main>
            <Books/>
            <BookByTitle/>
            <BookByAuthor/>
        </main>
    )
}