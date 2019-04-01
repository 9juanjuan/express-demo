// bring in express
const express = require('express'); 
const PORT = 3000;


//Create an express app.
// Roughly equivalent to the result of `http.createServer()`
const app = express();

// Respond to GET requests for the path "/" 
app.get('/', (req, res)  => {
    // Console log is server side
    console.log('Responding to a GET')
    res.send('Home page')
}); 
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