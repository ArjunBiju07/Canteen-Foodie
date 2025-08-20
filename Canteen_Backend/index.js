const express = require('express');
const cors = require('cors');
const app = express();
const insertbreakfast = require('./Routes/insert_breakfast');
const inserLunch = require('./Routes/insertLunch');
const insertEvening = require('./Routes/insertEvening');

const getBreakfast = require('./Routes/getBreakfast');
const getLunch = require('./Routes/getLunch');
const getEvening = require('./Routes/getEvening');

const delBreakfast = require('./Routes/delbreakfast');
const delLunch = require('./Routes/dellunch');
const delEvening = require('./Routes/delevening');


app.use(express.json());
app.use(cors());


app.use('/insertbreakfast', insertbreakfast);
app.use('/insertlunch', inserLunch);
app.use('/insertevening', insertEvening);

app.use('/getbreakfast', getBreakfast);
app.use('/getlunch', getLunch);
app.use('/getevening', getEvening);

app.use('/delbreakfast', delBreakfast);
app.use('/dellunch', delLunch);
app.use('/delevening', delEvening);

app.listen(3000, () => {
    console.log("Server is up http://localhost:3000 ")
});