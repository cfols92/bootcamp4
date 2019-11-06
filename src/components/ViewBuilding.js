import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const {data, selectedBuilding} = this.props;

		// given the building id, show the id, code, name, coordinates, and address in the view building

		const building = data
		.map(directory => {

			if(directory.id === selectedBuilding) {
				if(directory.coordinates != undefined && directory.address != undefined) {
					return(
						<ul key={directory.id}>
							<li >ID: {directory.id}</li>
							<li >CODE: {directory.code}</li>
							<li >NAME: {directory.name}</li>
							<li >COORDINATES: LATITUDE: {directory.coordinates.latitude}, LONGITUDE: {directory.coordinates.longitude}</li>
							<li >ADDRESS: {directory.address}</li>
						</ul>
					)
				} else if (directory.address != undefined) {
					return(
						<ul key={directory.id}>
							<li >ID: {directory.id}</li>
							<li >CODE: {directory.code}</li>
							<li >NAME: {directory.name}</li>
							<li >ADDRESS: {directory.address}</li>
						</ul>
					)
				} else if (directory.coordinates != undefined) {
					return(
						<ul key={directory.id}>
							<li >ID: {directory.id}</li>
							<li >CODE: {directory.code}</li>
							<li >NAME: {directory.name}</li>
							<li >COORDINATES: LATITUDE: {directory.coordinates.latitude}, LONGITUDE: {directory.coordinates.longitude}</li>
						</ul>
					)
				} else {
					return(
						<ul key={directory.id}>
							<li >ID: {directory.id}</li>
							<li >CODE: {directory.code}</li>
							<li >NAME: {directory.name}</li>
						</ul>
					)
				}
			} else {
				return null
			}
		})

		return (
			<div>
				<p>
					<i>Click on a name to view more information</i>
				</p>
				{building}
			</div>
		);
	}
}
export default ViewBuilding;
