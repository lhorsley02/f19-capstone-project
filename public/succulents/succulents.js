const snakeBtn = document.querySelector('.snake-view-btn')
const cactusBtn = document.querySelector('.cactus-view-btn')
const jadeBtn = document.querySelector('.jade-view-btn')
const zzBtn = document.querySelector('.zz-view-btn')
const heartsBtn = document.querySelector('.hearts-view-btn')


const BaseURL = `http://localhost:4005`


function getSnakeInfo(event) {
    
    axios.get(`${BaseURL}/api/plants`)
        .then(res => {
            console.log(Object.values(res.data[5]))
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