import React from 'react'
import HouseDisplay from '../../components/HouseDisplay'

const Home = ({ houses }) => {
	return (
		<>
			<div>Home</div>
			<HouseDisplay houses={houses} />
		</>
	)
}

export default Home