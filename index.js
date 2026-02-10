const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());//this will parse json

mongoose.connect('mongodb://localhost:27017/salesDB');


const sales_routing = require('./routes/sales');
const leaderboard_routing = require('./routes/leaderboard');



// Add sales routes
app.use('/api/sales', sales_routing);          

// Add leaderboard routes
app.use('/api/leaderboard', leaderboard_routing); 

// Start the server
app.listen(3000, function() {
    console.log('Server running on port 3000');
});



