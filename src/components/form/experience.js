import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { updateExperience } = this.props;
    const { id, position, company, city, from, to, description } =
      this.props.inputValues;

    return (
      <form data-id={id}>
        <input
          value={position}
          onChange={updateExperience}
          data-id='position'
          type='text'
          placeholder='Position'></input>
        <input
          value={company}
          onChange={updateExperience}
          data-id='company'
          type='text'
          placeholder='Company'></input>
        <input
          value={city}
          onChange={updateExperience}
          data-id='city'
          type='text'
          placeholder='City'></input>
        <input
          value={from}
          onChange={updateExperience}
          data-id='from'
          type='text'
          placeholder='From'></input>
        <input
          value={to}
          onChange={updateExperience}
          data-id='to'
          type='text'
          placeholder='To'></input>
        <textarea
          value={description}
          onChange={updateExperience}
          data-id='description'
          type='text'
          placeholder='Description'></textarea>
      </form>
    );
  }
}

export default Experience;
