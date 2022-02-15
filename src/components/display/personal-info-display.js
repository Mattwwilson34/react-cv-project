import React, { Component } from 'react';
import '../../styles/personal-info-display.css';

export class PersonalInfoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstName, lastName, title, address, email, phone, description } =
      this.props.displayValues;
    return (
      <div className='Personal-Info-Container'>
        <div className='Header-Container'>
          <span className='First-Name'>
            {firstName}
            {lastName}
          </span>
          <span className='Title'>{title}</span>
        </div>
        <span className='Address'>{address}</span>
        <span className='Phone'>{phone}</span>
        <span className='Email'>{email}</span>
        <div className='Description-Container'>
          <p>Description:</p>
          <span className='Description'>{description}</span>
        </div>
      </div>
    );
  }
}

export default PersonalInfoDisplay;
