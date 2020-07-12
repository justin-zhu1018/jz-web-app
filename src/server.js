//import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

//connect mongoDB with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flazey", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Check is mongoose is connected in your terminal
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

//Parse every single json / urlencoded coming in
//makes it so that the router can access the data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan("tiny"));

//Where I determine which route to put the data in (right now the data is in localhost:8080/)
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
}

app.listen(PORT, console.log(`SERVER IS STARTING AT ${PORT}`));

//package.json script pasted
// "start": "react-scripts start",
