import React from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from '../queries/queries';

function DisplayAuthors(){
    const { loading, data } = useQuery(getAuthorsQuery);
    if(loading){
        return( <option disabled>Loading authors</option> );
    } else {
        return data.authors.map(author => {
            return( <option key={ author.id } value={author.id}>{ author.name }</option> );
        });
    }    
}

function AddBook() {

    const [book, setBook] = React.useState({ name: "", genre: "", authorId: "" });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(book);
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input value={book.name} onChange={e => setBook({ ...book, name: e.target.value })} type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input value={book.genre} onChange={e => setBook({ ...book, genre: e.target.value })} type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={book.authorId} onChange={e => setBook({ ...book, authorId: e.target.value })} >                      
                    { DisplayAuthors() }
                </select>
            </div>
            <button>+</button>
        </form>
    )      
}

export default AddBook;
