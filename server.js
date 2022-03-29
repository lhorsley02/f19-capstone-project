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
        name: "Sansevieria",
        sunlight: "Anywhere from Low to Direct",
        water: "Every 2-3 Weeks, When Dry",
        category: "Succulent"
    },
    {
        name: "Cactaceae",
        sunlight: "Bright Indirect",
        water: "10 - 14 Days, When Dry",
        category: "Succulent"
    },
    {
        name: "Crassula Ovata",
        sunlight: "Bright Indirect",
        water: "Every 2-3 Weeks, When Dry",
        category: "Succulent"
    },
    {
        name: "Zamioculcas",
        sunlight: "Medium to Bright Indirect",
        water: "Every 7-14 Days, When Dry",
        category: "Succulent"
    },
    {
        name: "Ceropegia",
        sunlight: "Bright Indirect, Occasional Direct",
        water: "Every 7-10 Days, When Dry",
        category: "Succulent"
    },
    



    {
        name: "Lactuca Sativa",
        sunlight: "Direct Sun",
        water: "Daily",
        category: "Garden Plant"
    },
    {
        name: "Solanum Lycopersicum",
        sunlight: "Direct",
        water: "Daily",
        category: "Garden Plant"
    },
    {
        name: "Cucumis Sativus",
        sunlight: "Direct",
        water: "Daily",
        category: "Garden Plant"
    },
    {
        name: "Daucus Carota",
        sunlight: "Direct",
        water: "Daily",
        category: "Garden Plant"
    },
    {
        name: "Zea Mays",
        sunlight: "Direct",
        water: "Daily",
        category: "Garden Plant"
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



