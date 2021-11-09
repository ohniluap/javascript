//--> Creating an object
const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true,

    //--> Use of the constructor: this
    checkIn: function() {
        this.isAvailable = true
    },

    checkOut: function() {
        this.isAvailable = false
    }
};



//--> Use of the constructor: new
 
const book = new Object();
book.title = "1984";
book.author = "George Orwell";
book.isAvailable = false;



