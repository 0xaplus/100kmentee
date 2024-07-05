const mysql = require("mysql2");

const pool1 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookstore1",
}).promise();

const pool2 = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookstore2",
}).promise();

exports.getBookById = async (id) => {

    let books, pool, bookId;

    if (id > 5) {
        pool = pool2;
        bookId = id - 5;
    } else {
        pool = pool1;
        bookId = id;
    }

    books = await pool.query(`SELECT * FROM books WHERE id=${bookId}`)
    console.log(books);

    return books;
}