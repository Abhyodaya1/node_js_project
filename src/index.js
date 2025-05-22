const {PORT } =require('./config');
const express = require('express');
const app = express();

const apiroutes = require('./routes')

// app.get('/api/v1/blogs', (req,res)=>{
//  new thing this doesnt look tiddy so make things clean we use express routing

app.use('/api' , apiroutes);


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});