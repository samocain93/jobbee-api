const express = require('express');
const app = express();

const dotenv = require('dotenv');




// Setting up config.env file variables
dotenv.config({path : './config/config.env'})

// Importing routes
const jobs = require('./routes/Jobs')

app.use('/api/v1', jobs)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
})


