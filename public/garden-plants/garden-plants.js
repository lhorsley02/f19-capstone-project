const lettuceBtn = document.querySelector('.lettuce-view-btn')
const tomatoesBtn = document.querySelector('.tomatoes-view-btn')
const cucumbersBtn = document.querySelector('.cucumbers-view-btn')
const carrotsBtn = document.querySelector('.carrots-view-btn')
const cornBtn = document.querySelector('.corn-view-btn')


const BaseURL = `http://localhost:4005`


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