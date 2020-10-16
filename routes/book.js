const BookController = {};
const Model = require('./../models/Book.js')

BookController.create = function(request, response){
    var name = request.body.name;
    var author = request.body.author;
    // Model.create(name, author, function(error, response){

    // }); no need of this right now
    //console.log(name, author);
    // it can be written as
    Model.create(name, author, function(error, data){
        // here two variables are clasing bcs we ave already used response so
       // console.log(error, response) //OR WE CAN DO IT LIKE
       if(error){
           return response.status(500).send(error);
       }
       return response.status(200).send(data);
    })
}
BookController.update = function(request, response){
    Model.update();
}
BookController.get = function(request, response){
   //Model.get();
    return response.render("Book")
}
BookController.delete = function(request, response){
    Model.delete();
}

module.exports = BookController;