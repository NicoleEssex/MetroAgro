import axios from "axios";

export default {
    //gets all crops
    getCrops: () => {
        return axios.get("/api/availharvests");
    },
    //deletes crops (to be called in a delete button)
    deleteCrops: () => {
        return axios.delete("/api/availHarvests" + id);
    }
};

// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
