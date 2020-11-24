import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

//Apollo Client setup
const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div id='main'>
          <h1>Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}
