import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, removeBuilding } = this.props;

		const buildingList = data
		.filter(directory => {
			return(
				directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			)
		})
		.map(directory => {
			return (
				<tr onClick={() => selectedUpdate(directory.id)} key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
					<button type="button" className="btn btn-danger" onClick = {() => {removeBuilding(directory.id)}}>Remove</button>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
