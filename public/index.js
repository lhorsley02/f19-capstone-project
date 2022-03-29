


const monsteraBtn = document.querySelector('.monstera-view-btn')
const fiddleBtn = document.querySelector('.fiddle-view-btn')
const moneyPlantBtn = document.querySelector('.money-plant-view-btn')
const pothosBtn = document.querySelector('.pothos-view-btn')
const spiderBtn = document.querySelector('.spider-view-btn')


const snakeBtn = document.querySelector('.snake-view-btn')
const cactusBtn = document.querySelector('.cactus-view-btn')
const jadeBtn = document.querySelector('.jade-view-btn')
const zzBtn = document.querySelector('.zz-view-btn')
const heartsBtn = document.querySelector('.hearts-view-btn')


const lettuceBtn = document.querySelector('.lettuce-view-btn')
const tomatoesBtn = document.querySelector('.tomatoes-view-btn')
const cucumbersBtn = document.querySelector('.cucumbers-view-btn')
const carrotsBtn = document.querySelector('.carrots-view-btn')
const cornBtn = document.querySelector('.corn-view-btn')


const BaseURL = `http://localhost:4005`


function sayHello(event) {
    
    axios.get(`${BaseURL}`)
        .then((res) => {
            alert("Working")
        })
}

function getInfo(event) {
    
    axios.get(`${BaseURL}/plants/`)
        .then(res => {
            alert("working?")
        })
        .catch(err => {
            console.log(err)
        })
}



monsteraBtn.addEventListener('click', sayHello)
fiddleBtn.addEventListener('click', getInfo)