const {Serverconfig , logger} =require('./config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const apiroutes = require('./routes')

// app.get('/api/v1/blogs', (req,res)=>{
//  new thing this doesnt look tiddy so make things clean we use express routing
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api' , apiroutes);


app.listen(Serverconfig.PORT, async () => {
    console.log(`Server is running on port ${Serverconfig.PORT}`);
    logger.info("successfull")
     const{Airports, City} = require('./models');
     const cities = await City.findAll();
     console.log("Cities:", cities.map(city => city.name));
     const airport = await Airports.create({name: 'indira gandhi international airport', code: 'DEL', address: 'New Delhi, India', cityID: 1});
     console.log("Airport created:", airport.name);

     await City.destroy({
        where: {
            id:4
        }
     })
});