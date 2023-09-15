import React from 'react'
import Home from '../../pages/Home'

const HouseDisplay = ({ houses }) => {
	return (
		<>
			<div>HouseDisplay</div>
			{houses.map((house, index) => {
				return <div key={index + house.name}>
					<div style={{ color: "#800020", fontSize: "26px" }}><strong>Name: </strong>{house.name}</div>
					<div><strong>Address: </strong>{house.address}</div>
					<div><strong>Price: </strong>{house.price}</div>
					<div><strong>IsSold: </strong>{house.isSold ? "true" : "false"}</div>
					<br />
				</div>
			})}
		</>
	)
}

export default HouseDisplay