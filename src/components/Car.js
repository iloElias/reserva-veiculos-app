import React from "react";

const CarItem = ({ carColor, carName, carPrice }) => {

    return <div className="car-container">
        {/* <div className="car-icon">{carIcon}</div> */}
        <h3 className="car-name">{carName}</h3>
        <p className="rent-price">{carPrice}</p>
    </div>;
}

const CarList = ({ carList }) => {
    return <div className="car-list-container">
        {carList.map((item, index) => {
            return <CarItem key={index} carName={item.car_name} carPrice={item.car_price} />
        })}
    </div>
}

export const Items = {
    CarItem, CarList,
};