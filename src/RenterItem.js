import React, { Component } from 'react';

class RenterItem extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    const {onDelete, name} = this.props;

    onDelete(name);
  }

  render() {
    const {name, adress, phone} = this.props;

    return (
      <div>
        <span>{name}</span>
        {` | `}
        <span>{adress}</span>
        {` | `}
        <span>{phone}</span>
        <button onClick={this.onDelete}>Delete renter</button>
      </div>  
    );
  }
}

export default RenterItem;
