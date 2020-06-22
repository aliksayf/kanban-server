const express = require('express')
const mongoose = require('mongoose')

const PORT = +process.env.PORT || 3000;
const app = express();

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
    } catch (e) {
        console.log(e)
    }
}

start()

app.listen(PORT, () => {
    // console.log(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
    console.log(`Server has been started...`);
});
