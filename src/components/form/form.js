import React, { Component } from 'react';
import PersonalInfo from './personal-info';
import Education from './education';
import Experience from './experience';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      handleChange,
      updateEducation,
      addEducation,
      deleteEducation,
      updateExperience,
      addExperience,
      deleteExperience,
    } = this.props;

    const { personalInfo, educationArray, experienceArray } =
      this.props.inputValues;

    return (
      <div className='Form'>
        <p>Personal Information</p>
        <PersonalInfo handleChange={handleChange} personalInfo={personalInfo} />
        <hr></hr>
        <div>
          <p>Education</p>
          {educationArray.map((edu) => {
            return (
              <div key={edu.id}>
                <Education
                  updateEducation={updateEducation}
                  inputValues={edu}
                />
                <div className='Button-Container'>
                  <button className='Add-Button' onClick={addEducation}>
                    Add Education
                  </button>
                  <button
                    className='Delete-Button'
                    onClick={(e) => deleteEducation(edu.id, e)}>
                    Delete Education
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <hr></hr>
          <p>Experience</p>
          {experienceArray.map((exp) => {
            return (
              <div key={exp.id}>
                <Experience
                  inputValues={exp}
                  updateExperience={updateExperience}
                />
                <div className='Button-Container'>
                  <button className='Add-Button' onClick={addExperience}>
                    Add Experience
                  </button>
                  <button
                    className='Delete-Button'
                    onClick={(e) => deleteExperience(exp.id, e)}>
                    Delete Experience
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;
