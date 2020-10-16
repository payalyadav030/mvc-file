const chalk = require('chalk');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const PORT = 8997;

app.use(express.json());
app.use(express.urlencoded());

app.engine('.hbs', exphbs({
    extname : '.hbs'      
}))
app.set('view engine', '.hbs');

// MVC - MODEL VIEW CONTROLLER


// importing book models
var bookRoute = require('./routes/book.js');
//console.log("book" , book);
//console.log("name", book.create("payal"));
console.log(bookRoute);

// create route for handling the book that are created
// app.post('/create', function(request, response){

//  })   WE CAN ALSO WRITE THIS CREATE ROUTE AS GIVEN ABOVE BCS IN ROUTES FILE BOOKROute.CREATE HAVE SAME FUNCTION
//       SO IT WILL AUTOMATICALLY CALL THE SAME FUNTION AND INSIDE THINGS
app.post('/create', bookRoute.create);
app.put('/update', bookRoute.update);
app.get('/get', bookRoute.get);
app.delete('/delete', bookRoute.delete);


app.listen(PORT, function(){
    console.log("application has started on port:", PORT);
});

