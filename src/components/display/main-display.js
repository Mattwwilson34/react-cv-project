import React, { Component } from 'react';
import PersonalInfoDisplay from './personal-info-display';
import EducationDisplay from './education-display';
import ExperienceDisplay from './experience-display';

export default class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    const { personalInfo, educationArray, experienceArray } =
      this.props.displayValues;
    return (
      <div className='Main-Display'>
        <PersonalInfoDisplay displayValues={personalInfo} />
        <hr className='Edu-Top-hr'></hr>
        <div className='Edu-Header'>EDUCATION</div>
        <hr className='Edu-Bottom-hr'></hr>
        {educationArray.map((edu) => {
          return <EducationDisplay key={edu.id} displayValues={edu} />;
        })}
        <hr className='Exp-Top-hr'></hr>
        <div className='Exp-Header'>EXPERIENCE</div>
        <hr className='Exp-Bottom-hr'></hr>
        {experienceArray.map((exp) => {
          return <ExperienceDisplay key={exp.id} displayValues={exp} />;
        })}
      </div>
    );
  }
}
