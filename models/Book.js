// asunchrornous means it wont block the code which is alredy in the stack

const Book = {};

Book.create = function(bookName, authorName, callback){
   
    //return "hello " +name;
    if(!bookName){
        return callback("error! book name is required");
    }
    if(!authorName){
        return callback("error! author name is required");
    }
    console.log("adding book with following details:", bookName, authorName)
    setTimeout(function(){
        return callback(null, "success! book has been stored");
    }, 500)
   // console.log("adding book with following details:", bookName, authorName)
    //return callback(null, "success! book has been stored");
    // call back is a function that will be invoked when there will be an error

    // TO GET MORE CLEAR ABOUT CALLBACKS
    // console.log("received a request to create a book:", bookName, authorName);
    // setTimeout(function(){
    //     console.log("successfully stored the data")
    // }, 800);
    // console.log(" i should not be printed")
    // HERE I SHOUND NOT BE PRINTED COSOLED FIRST THEN SET TIMEOUT FUNCTION CONSOLED
    // SO WE NEED CALLBACKS

}

Book.update = function(){

}

Book.get = function(){
    
    
}

Book.delete = function(){

}

module.exports = Book;  // MODULE EXP IS UTILITY FUNCTION IN JS HELPS TO IMPORT THE FUNCTIONS WRITTEN IN IT