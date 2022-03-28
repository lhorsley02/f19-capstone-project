const { default: axios } = require("axios");

const snakeAddBtn = document.querySelector('.snake-add-btn')
const echeveriaAddBtn = document.querySelector('.echeveria-add-btn')
const cactusAddBtn = document.querySelector('.cactus-add-btn')
const jadeAddBtn = document.querySelector('.jade-add-btn')
const bearAddBtn = document.querySelector('.bear-add-btn')
const aloeAddBtn = document.querySelector('.aloe-add-btn')
const pearlsAddBtn = document.querySelector('.pearls-add-btn')
const zzAddBtn = document.querySelector('.zz-add-btn')
const airAddBtn = document.querySelector('.air-add-btn')
const heartsAddBtn = document.querySelector('.hearts-add-btn')

snakeAddBtn.classList.add('hide')

const baseURL = `http://127.0.0.1:5503/`


function addPlantCard(plnt) {
    let plntCard = document.getElement
}


function addPlant(event) {
    event.preventDefault();

    axios.post(`${baseURL}/#my-plants`, body)
        .then(function(res) {
            for(let i = 0; i < res.data.length; i++) {
                addPlantCard(res.data[i])
            }
        })
}

snakeAddBtn.addEventListener('onclick', addPlant)
echeveriaAddBtn.addEventListener('onclick', addPlant)
cactusAddBtn.addEventListener('onclick', addPlant)
jadeAddBtn.addEventListener('onclick', addPlant)
bearAddBtn.addEventListener('onclick', addPlant)
aloeAddBtn.addEventListener('onclick', addPlant)
pearlsAddBtn.addEventListener('onclick', addPlant)
zzAddBtn.addEventListener('onclick', addPlant)
airAddBtn.addEventListener('onclick', addPlant)
heartsAddBtn.addEventListener('onclick', addPlant)


