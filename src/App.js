import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: this.props.data,
      filterText: '',
      selectedBuilding: 0,
      code: null,
      name: null,
      coordinates: {
        latitude: null,
        longitude: null,
      },
      address: null
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding = (building) => {
    // console.log(building)

    building.id = this.state.buildings[this.state.buildings.length - 1].id + 1

    let buildings = [...this.state.buildings, building]
    this.setState({
      buildings: buildings
    })
  }

  removeBuilding = (id) => {
    let buildings = this.state.buildings.filter(building => {
      return building.id != id
    })

    this.setState({
      buildings: buildings
    })
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <AddBuilding
          data = {this.state.buildings}
          addBuilding = {this.addBuilding.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <b>Code Building</b>
                      </td>
                    </tr>
                  </tbody>
                  <BuildingList
                    data = {this.state.buildings}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    removeBuilding = {this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding = {this.state.selectedBuilding}
                data = {this.state.buildings}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
