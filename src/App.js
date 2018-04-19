import React, { Component } from 'react';
import RenterItem from "./RenterItem.js";
import AddRenter from "./AddRenter.js";
import './App.css';

const renters = [
  {
    name: "Kyiv Renters",
    adress: "Vasylkivska, 15",
    phone: 445554433
  },
  {
    name: "Renter Company",
    adress: "Antonovycha, 10",
    phone: 442223322 
  },
  {
    name: "World Wide Renters",
    adress: "Lva Tolsogo, 20",
    phone: 983332211 
  }
];

localStorage.setItem("rentersItem", JSON.stringify(renters))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renters: JSON.parse(localStorage.getItem("rentersItem"))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentWillMount() {
    const renters = this.getRenters();

    this.setState({renters});
  }

  getRenters() {
    return this.state.renters;
  }

  onDelete(name) {
    const renters = this.getRenters();

    const filteredRenters = renters.filter(renter => {
      return renter.name !== name;
    });

    this.setState({renters: filteredRenters});
  }

  onAdd(name, adress, phone) {
    const renters = this.getRenters();

    renters.push({
      name,
      adress,
      phone
    });
    console.log(name, adress, phone);
    this.setState = ({renters});
  }

  render() {
    return (
      <div className="App">
        <h1>Products manager</h1>
        <div>
          <AddRenter
            onAdd = {this.onAdd}
          />
          {
            this.state.renters.map(renter => {
              return (
                <RenterItem
                  key = {renter.name}
                  name = {renter.name}
                  adress = {renter.adress}
                  phone = {renter.phone}
                  onDelete = {this.onDelete}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
