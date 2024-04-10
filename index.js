//create cars api using express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//const cors = require('cors');

/*app.use(cors({
    origin: 'https://blue-flower-08292cd03.5.azurestaticapps.net'
}));*/

app.use(express.json());

const cars = require('./cars.json');

//get all cars
app.get('https://github.com/kmabasa212/backend-api/cars', (req, res) => {
    res.json(cars);
});

//get car by id
app.get('https://github.com/kmabasa212/backend-api/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});

//update car
app.put('https://github.com/kmabasa212/backend-api/cars/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});

//delete car
app.delete('https://github.com/kmabasa212/backend-api/cars/:id', (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('https://github.com/kmabasa212/backend-api/cars', (req, res) => {
    console.log(req);
    const newCar = req.body;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

//start app at localhost:3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });