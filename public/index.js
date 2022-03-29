


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





function getSnakeInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("snake-info").textContent = Object.values(res.data[5]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getCactusInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("cactus-info").textContent = Object.values(res.data[6]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getJadeInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("jade-info").textContent = Object.values(res.data[7]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getZzInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("zz-info").textContent = Object.values(res.data[8]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getHeartsInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("hearts-info").textContent = Object.values(res.data[9]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}




function getLettuceInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("lettuce-info").textContent = Object.values(res.data[10]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getTomatoesInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("tomatoes-info").textContent = Object.values(res.data[11]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getCucumbersInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("cucumbers-info").textContent = Object.values(res.data[12]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getCarrotsInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("carrots-info").textContent = Object.values(res.data[13]).join(" ")
        })
        .catch(err => {
            console.log(err)
        })
}

function getCornInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[0]))
            document.getElementById("corn-info").textContent = Object.values(res.data[14]).join(" ")
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


snakeBtn.addEventListener('click', () => {
    getSnakeInfo()
})
cactusBtn.addEventListener('click', () => {
    getCactusInfo()
})
jadeBtn.addEventListener('click', () => {
    getJadeInfo()
})
zzBtn.addEventListener('click', () => {
    getZzInfo()
})
heartsBtn.addEventListener('click', () => {
    getHeartsInfo()
})


lettuceBtn.addEventListener('click', () => {
    getLettuceInfo()
})
tomatoesBtn.addEventListener('click', () => {
    getTomatoesInfo()
})
cucumbersBtn.addEventListener('click', () => {
    getCucumbersInfo()
})
carrotsBtn.addEventListener('click', () => {
    getCarrotsInfo()
})
cornBtn.addEventListener('click', () => {
    getCornInfo()
})