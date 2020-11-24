import BookList from "./components/BookList";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Apollo Client setup
const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}
