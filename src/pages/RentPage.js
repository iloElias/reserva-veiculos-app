import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Items } from "../components/Car";
import axios from "axios";

const cars = [
  {car_name: "Monza", rent_price: 150.00},
  {car_name: "Sedona", rent_price: 200.00},
  {car_name: "Galaxy", rent_price: 180.00},
  {car_name: "Astra", rent_price: 160.00},
  {car_name: "Civic", rent_price: 170.00},
  {car_name: "Mustang", rent_price: 250.00},
  {car_name: "Rav4", rent_price: 190.00}
]

const RentPage = () => {
  const [carList, setCarList] = useState(cars);

  useEffect(() => {
    axios.get("http://localhost:3000/vehicles")
      .then((response) => {
        setCarList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return <Paper className="page-container" square elevation={5} style={{ backgroundColor: "#223742", color: "white" }}>
    <Typography variant="h5" component="h1" gutterBottom>
      Alugue seu carro:
    </Typography>
    <Items.CarList carList={carList}/>
  </Paper>;
}

export default RentPage;