const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

/*mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);
*/

const db1 = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db1, { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


const bookSeed = {
    authors: ["Tony Robbins"],
    description: "In his first book in two decades, Anthony Robbins turns to the topic that vexes us all: How to secure financial freedom for ourselves and for our families.",
    image: "http://books.google.com/books/content?id=wghcBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=wghcBAAAQBAJ&source=gbs_api",
    title: "Money Master The Game",
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });