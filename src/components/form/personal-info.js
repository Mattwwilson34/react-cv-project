import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {
      handleChange,
      firstName,
      lastName,
      title,
      address,
      email,
      phone,
      description,
    } = this.props;

    return (
      <form data-id='personalInfo'>
        <input
          value={firstName}
          data-id='firstName'
          type='text'
          onChange={handleChange}
          placeholder='First Name'></input>
        <input
          value={lastName}
          data-id='lastName'
          type='text'
          onChange={handleChange}
          placeholder='Last Name'></input>
        <input
          value={title}
          data-id='title'
          type='text'
          onChange={handleChange}
          placeholder='Title'></input>
        <input
          value={address}
          data-id='address'
          type='text'
          onChange={handleChange}
          placeholder='Address'></input>
        <input
          value={email}
          data-id='email'
          type='text'
          onChange={handleChange}
          placeholder='Email'></input>
        <input
          value={phone}
          data-id='phone'
          type='text'
          onChange={handleChange}
          placeholder='Phone'></input>
        <input
          value={description}
          data-id='description'
          type='text'
          onChange={handleChange}
          placeholder='Description'></input>
      </form>
    );
  }
}

export default PersonalInfo;
