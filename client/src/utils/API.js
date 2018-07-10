import axios from "axios";
import { getAccessToken } from './AuthService';


const BASE_URL = 'http://localhost:3333';

export default {
   //gets all crops
   getMyBounty: () => {
    return axios.get("/api/mybounty");
},
//deletes crops (to be called in a delete button) little red "x" maybe?
deleteMyBounty: (id) => {
    console.log("hitting me with something here");
    return axios.delete("/api/mybounty/" + id);
},
saveMyBounty: function(my_bountyData) {
    console.log("util api hit")
    return axios.post("/api/mybounty", my_bountyData);
  }
};

// stop it


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
