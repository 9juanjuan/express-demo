// bring in express
const express = require('express'); 
const PORT = 3000;
const axios = require('axios');
const es6Renderer = require('express-es6-template-engine');

//Create an express app.
// Roughly equivalent to the result of `http.createServer()`
const app = express();
const bookTitles = [
    'The Shining',
    'It',
    'Pet Sematary',
    'The Langoliers'
]
app.engine('html', es6Renderer); 
app.set('views', 'views');
app.set('view engine', 'html');





// Express lets you pass in more than one handler 
function log (req, res, next) {
    console.log(`They asked for ${req.url}`)
    // handlers can signal to express that they are done it is ok to move on the next handler
    next();
};
 
function checksForUser(req, res, next) {
    const isLoggedIn= true;
    if(isLoggedIn) {
        req.user = {
            username:'Cascading Style Seil'
        };
    } else {
        //I do not want to go to the 'next' middleware.
        // I want to redirect them to the login pag.
        res.redirect('/login');
    }
    // req.user = null;
    next();
}

// app.get('/jokes', async (req, res))

function homePage(req, res) {
    // res.send('Home page as a named function')
    if (req.user) {
        res.send(`Hey ${req.user.username}! Hooray.`)
    } else {
        res.send(`Wait. I don't't know you`)
    }
};


function loginPage(req,res) {
    res.send(`You must log in`)
}
app.get('/login', loginPage);
app.get('/',  (req,res) => {
    res.render('index', {
        locals: {
            title: 'I am a robot',
            books:bookTitles
        }
    })


})
// app.get('/', checksForUser, loginPage, homePage);

// Respond to GET requests for the path "/" 
// app.get('/', (req, res)  => {
//     // Console log is server side
//     console.log('Responding to a GET')
//     res.send('Home page')
// }); 
app.post('/', (req,res) => {
    console.log('Responding to a POST')
    res.send('You sent a POST')
});
app.put('/', (req,res) => {
    console.log('Responding to a PUT')
    res.send('You sent a PUT')
});
// 1. identify the variable name that you want to have
// 2. In the string, write that variable name as part of the path
// 3.  Put a colon in front of the variable name in the path
// 4 It will now be part of req.params 
app.put('/users/:userID' , (req, res) => {
    console.log(req.params.userID) 
    res.send(` You sent me a PUT for  ${req.params.userID}`)
})



app.delete('/users/:userID/delete', (req,res) => {
    console.log('req.params.userID');
    res.send(`You just deleted ${req.params.userID}`)
});




app.get('/bye', (req, res) => {
    res.send('good')
})





// Listen on our PORT
app.listen(PORT, () => {
    console.log(`Your amazing express app is running on port ${PORT}`);

});