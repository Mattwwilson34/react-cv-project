import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { updateEducation } = this.props;
    const { id, degree, school, location, dateCompleted } =
      this.props.inputValues;
    return (
      <form data-id={id}>
        <input
          value={degree}
          onChange={updateEducation}
          data-id='degree'
          type='text'
          placeholder='Degree'></input>
        <input
          value={school}
          onChange={updateEducation}
          data-id='school'
          type='text'
          placeholder='School'></input>
        <input
          value={location}
          onChange={updateEducation}
          data-id='location'
          type='text'
          placeholder='Location'></input>
        <input
          value={dateCompleted}
          onChange={updateEducation}
          data-id='dateCompleted'
          type='text'
          placeholder='Date Completed'></input>
      </form>
    );
  }
}

export default Education;
