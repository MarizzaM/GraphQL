const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://marizza:demo8888@cluster0.9h62k.mongodb.net/gql")
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});