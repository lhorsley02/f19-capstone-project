const monsteraBtn = document.querySelector('.monstera-view-btn')
const fiddleBtn = document.querySelector('.fiddle-view-btn')
const moneyPlantBtn = document.querySelector('.money-plant-view-btn')
const pothosBtn = document.querySelector('.pothos-view-btn')
const spiderBtn = document.querySelector('.spider-view-btn')


const BaseURL = `http://localhost:4005`


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



monsteraBtn.addEventListener('click', () => {
    getMonsteraInfo()
})
fiddleBtn.addEventListener('click', () => {
    getFiddleInfo()
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