import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';


function BookList() {
	const { loading, error, data } = useQuery(getBooksQuery);

	const [ selected, setSelected ] = React.useState(null);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<ul id="book-list">
				{data.books.map((book) => {
					return (
						<li	key={book.id} onClick={() => { setSelected(book.id)	}}>
							{book.name}
						</li>
					);
				})}
			</ul>
			{selected ? <BookDetails bookId={selected} /> : <div>No book selected...</div>}
		</div>
	);
}

export default BookList;
