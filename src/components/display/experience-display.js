import React, { Component } from 'react';
import '../../styles/experience-display.css';

export class ExperienceDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { position, company, city, from, to, description } =
      this.props.displayValues;
    return (
      <div className='Experience-Container'>
        <div className='Exp-Left-Container'>
          <span className='Company'>{company} - </span>
          <span>{position} - </span>
          <span className='Exp-City'>{city}</span>
        </div>
        <div className='Exp-Right-Container'>
          <span className='Exp-From'>{from} - </span>
          <span className='Exp-To'>{to}</span>
        </div>
        <span>{description}</span>
      </div>
    );
  }
}

export default ExperienceDisplay;
