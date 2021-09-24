import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`;

function BookList() {
	
	const {loading, error, data} = useQuery(getBooksQuery)
	
	if (data) {
		console.log("data: ", data);
	}

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<ul id="book-list">
			<li>Book name: </li>
		</ul>
	);
}

export default BookList;
