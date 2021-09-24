import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;

function DisplayAuthors(){
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if(loading){
        return( <option disabled>Loading authors</option> );
    } else {
        return data.authors.map(author => {
            return( <option key={ author.id } value={author.id}>{ author.name }</option> );
        });
    }    
}

function AddBook() {
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>                       
                    { DisplayAuthors() }
                </select>
            </div>
            <button>+</button>
        </form>
    )      
}

export default AddBook;
