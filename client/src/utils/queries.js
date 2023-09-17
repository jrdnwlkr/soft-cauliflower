import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;


export const GET_SEARCHED_BOOKS = gql`
    query searchBooks($searchInput: String!) {
    searchedBooks(searchInput: $searchInput) {
      bookId
      authors
      title
      description
      image
      link
    }
  }
`;