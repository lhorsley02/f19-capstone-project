


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

function getMonsteraInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("monstera-info").textContent = Object.values(res.data[0]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getFiddleInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("fiddle-info").textContent = Object.values(res.data[1]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getMoneyInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("money-plant-info").textContent = Object.values(res.data[2]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getPothosInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("pothos-info").textContent = Object.values(res.data[3]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getSpiderInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("spider-info").textContent = Object.values(res.data[4]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}









function displayInfo(event) {

    let printName = document.getElementById("fiddle-info").innerHTML

    axios.post(`${BaseURL}/api/viewedPlants`, {name: printName} )
        .then((res) => {

        })
}


monsteraBtn.addEventListener('click', () => {
    getMonsteraInfo()
})
fiddleBtn.addEventListener('click', () => {
    getFiddleInfo()
    displayInfo()
})
moneyPlantBtn.addEventListener('click', () => {
    getMoneyInfo()
})
pothosBtn.addEventListener('click', () => {
    getPothosInfo()
})
spiderBtn.addEventListener('click', () => {
    getSpiderInfo()
})