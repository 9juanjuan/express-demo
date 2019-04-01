// bring in express
const express = require('express'); 
const PORT = 3000;


//Create an express app.
// Roughly equivalent to the result of `http.createServer()`
const app = express();

// Respond to GET requests for the path "/" 
app.get('/', (req, res)  => {
    res.send('Home page')
}); 
app.post('/', (req,res) => {
    res.send('You sent a POST')
});
app.put('/', (req,res) => {
    res.send('You sent a PUT')
});
app.delete('/', (req,res) => {
    res.send('You sent a DELETE')
});




app.get('/bye', (req, res) => {
    res.send('good')
})





// Listen on our PORT
app.listen(PORT, () => {
    console.log(`Your amazing express app is running on port ${PORT}`);

});