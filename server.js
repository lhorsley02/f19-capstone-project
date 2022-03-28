const express = require("express");
const cors = require("cors");
const path = require("path");
const {plants} = require('./data')

const app = express();
app.use(cors());
app.use(express.json());



// app.use(express.static(path.join(__dirname, "./indoor-plants")));
// app.use(express.static(path.join(__dirname, "./succulents")));
// app.use(express.static(path.join(__dirname, "./garden-plants")));
// app.use(express.static(path.join(__dirname, "./all-plants")));

app.get('/', (req, res) => {
    res.sendFile(path.join(___dirname, '/index.html'))
})



const {addPlant, deletePlant} = require('./controller')


app.post('/api/my-plants', addPlant);
app.delete('/api/my-plants/:id', deletePlant);







const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`)
});    



