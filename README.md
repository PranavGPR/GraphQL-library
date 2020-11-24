## Description

<p>This is a simple library app powered by React, ApolloClient, GraphQL, MongoDB</p>

First, install all the dependencies on both client and server side. You can have both yarn and npm for installing these.

For client:
```shell
cd app
npm i
```

For server:
```shell
cd server
npm i
```

To start the React client:
``` shell
cd app
npm start
```
And now the client will be running at http://localhost:3000

To start the Node server:
``` shell
cd server
nodemon app
```
Nodemon is a package which is included in devdependency to run the node server without manually restarting every single time we change something.

After entering the above command, your server will be running at http://localhost:4000

To use the GraphiQL, go to http://localhost:4000/graphql