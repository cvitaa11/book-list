const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cors
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(
  "mongodb://test:test123@cluster0-shard-00-00-lsoad.mongodb.net:27017,cluster0-shard-00-01-lsoad.mongodb.net:27017,cluster0-shard-00-02-lsoad.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server running");
});
