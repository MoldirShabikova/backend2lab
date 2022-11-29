const houses = require('./db.json')
let houseId = 4;
module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = houses.findIndex(elem => elem.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { price,address, imageURL} = req.body
        let newHouse = {
            id: houseId,
            address,
            price,
            imageURL
        }

        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req, res) =>{
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => elem.id === +id)

if(type === 'plus'){
    houses[index].price +=10000
    res.status(200).send(houses)
}else if (type === 'minus'){
    houses[index].price -=10000
    res.status(200).send(houses)
}

        },

}


