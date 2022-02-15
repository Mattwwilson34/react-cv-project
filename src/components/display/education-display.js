import React, { Component } from 'react';
import '../../styles/education-display.css';

export class EducationDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { degree, school, location, dateCompleted } =
      this.props.displayValues;
    return (
      <div className='Education-Container'>
        <div className='Edu-Left-Container'>
          <span className='Degree'>{degree} </span>
          <span>{school} </span>
          <span>{location} </span>
        </div>
        <span className='Date-Completed'>{dateCompleted}</span>
      </div>
    );
  }
}

export default EducationDisplay;
