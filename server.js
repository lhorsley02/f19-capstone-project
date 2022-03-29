const express = require('express');
const cors = require('cors');
const path = require('path');



const app = express();
app.use(cors());
app.use(express.json());



app.use(express.static(path.join(__dirname, "./public")));





const plants = [
    {
        name: "NAME: Monstera Deliciosa",
        sunlight: "LIGHT: Bright Indirect Light",
        water: "WATER: Once Weekly",
        category: "CATEGORY: Indoor Plant"
    
    },
    {
        name: "NAME: Ficus Lyrata ~~~~",
        sunlight: "LIGHT: Bright Indirect",
        water: "WATER: Every 7-10 Days",
        category: "CATEGORY: Indoor Plant"
    },
    {
        name: "NAME: Pilea Peperomioides",
        sunlight: "LIGHT: Bright Indirect",
        water: "WATER: Once Weekly",
        category: "CATEGORY: Indoor Plant"
    },
    {
        name: "NAME: Chlorophytum Comosum",
        sunlight: "LIGHT: Low / Medium ~~~~",
        water: "WATER: Every 7-10 Days",
        category: "CATEGORY: Indoor Plant"
    },
    {
        name: "NAME: Epipremnum Aureum",
        sunlight: "LIGHT: Medium / Bright Filtered",
        water: "WATER: Every 10 Days, When Dry",
        category: "CATEGORY: Indoor Plant"
    },
 



    {
        name: "NAME: Sansevieria ~~~",
        sunlight: "LIGHT: Low / Direct ~~~",
        water: "WATER: Every 2-3 Weeks",
        category: "CATEGORY: Succulent"
    },
    {
        name: "NAME: Cactaceae ~~~",
        sunlight: "LIGHT: Bright Indirect",
        water: "WATER: 10 - 14 Days",
        category: "CATEGORY: Succulent"
    },
    {
        name: "NAME: Crassula Ovata",
        sunlight: "LIGHT: Bright Indirect",
        water: "WATER: Every 2-3 Weeks",
        category: "CATEGORY: Succulent"
    },
    {
        name: "NAME: Zamioculcas ~~~~",
        sunlight: "LIGHT: Medium / Bright Indirect",
        water: "WATER: Every 7-14 Days",
        category: "CATEGORY: Succulent"
    },
    {
        name: "NAME: Ceropegia ~~~",
        sunlight: "LIGHT: Bright Indirect",
        water: "WATER: Every 7-10 Days",
        category: "CATEGORY: Succulent"
    },
    



    {
        name: "NAME: Lactuca Sativa",
        sunlight: "LIGHT: Direct Sun ~~~",
        water: "WATER: Daily ~~~",
        category: "CATEGORY: Garden Plant"
    },
    {
        name: "NAME: Solanum Lycopersicum",
        sunlight: "LIGHT: Direct ~~~ ~~~ ",
        water: "WATER: Daily ~~~ ~~~ ",
        category: "CATEGORY: Garden Plant"
    },
    {
        name: "NAME: Cucumis Sativus",
        sunlight: "LIGHT: Direct ~~~ ~~~ ",
        water: "WATER: Daily ~~~ ~~~ ",
        category: "CATEGORY: Garden Plant"
    },
    {
        name: "NAME: Daucus Carota",
        sunlight: "LIGHT: Direct ~~~ ~~~ ",
        water: "WATER: Daily ~~~ ~~~ ",
        category: "CATEGORY: Garden Plant"
    },
    {
        name: "NAME: Zea Mays ~~~ ~~~ ",
        sunlight: "LIGHT: Direct ~~~ ~~~ ",
        water: "WATER: Daily ~~~ ~~~ ",
        category: "CATEGORY: Garden Plant"
    },
   
]


const viewedPlants = []


app.get('/api/plants', (req, res) => {
    res.status(200).send(plants)
})

app.post('/api/viewedPlants', (req, res) => {
    
    if(req.body.name) {
        
        res.status(200).send("Info Displayed Successfully")
    }
    console.log(req.body.name)
    
})




const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`)
});    



