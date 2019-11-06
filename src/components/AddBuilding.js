import React from 'react';

class AddBuilding extends React.Component {

    handleChange = (event) => {
        // if(event.target.id == latitude || event.target.id == longitude){
        //     this.setState({
        //         [event.target.id]: event.target.value
        //     })
        // }

        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBuilding(this.state);
    }

    render() {

        return(
            <div>
                <h4>Add a building in the input below.</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="code" onChange={this.handleChange} placeholder="Enter Code..."/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} placeholder="Enter Name..."/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="latitude" onChange={this.handleChange} placeholder="Enter Latitude..."/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="longitude" onChange={this.handleChange} placeholder="Enter Longitude..."/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="address" onChange={this.handleChange} placeholder="Enter Address..."/>
                    </div>
                    <button type="submit" className="btn btn-success">Add Building</button>
                </form>
            </div>
        );
    }
}

export default AddBuilding;