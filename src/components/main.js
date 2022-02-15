import React, { Component } from 'react';
import Form from './form/form';
import MainDisplay from './display/main-display';
import uniqid from 'uniqid';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: 'Matt',
        lastName: 'Wilson',
        title: 'Physical Therapist',
        address: '2532 Ross Road Durham, NC 27703',
        email: 'mattwwilson34@gmail.com',
        phone: '(267)-566-5793',
        description: '',
      },
      educationArray: [
        {
          id: uniqid(),
          degree: 'Doctor of Physical Therapy',
          school: 'Duke University',
          location: '(Durham, North Carolina)',
          dateCompleted: 'May 2021',
        },
        {
          id: uniqid(),
          degree: 'Bachelors of Science',
          school: 'Temple University',
          location: '(Philadelphia, Pennsylvania)',
          dateCompleted: 'December 2014',
        },
      ],
      experienceArray: [
        {
          id: uniqid(),
          position: 'PT',
          company: 'PIVOT Physical Therapy',
          city: 'Wake Forest',
          from: 'Sept 2021',
          to: 'Aug 2022',
          description: '',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleChange(e) {
    const parentID = e.target.parentElement.dataset.id;
    const elementID = e.target.dataset.id;

    this.setState({
      [parentID]: {
        ...this.state.personalInfo,
        [elementID]: e.target.value,
      },
    });
  }

  updateEducation(e) {
    const educationArray = this.state.educationArray;
    const id = e.target.parentElement.dataset.id;
    const elementID = e.target.dataset.id;
    this.setState({
      educationArray: educationArray.map((edu) => {
        return edu.id === id
          ? {
              ...edu,
              [elementID]: e.target.value,
            }
          : edu;
      }),
    });
  }

  addEducation() {
    this.setState({
      educationArray: [
        ...this.state.educationArray,
        {
          id: uniqid(),
          degree: '',
          school: '',
          location: '',
          dateCompleted: '',
        },
      ],
    });
  }

  deleteEducation(id, e) {
    const educationArray = this.state.educationArray;
    if (educationArray.length <= 1) {
      return;
    } else {
      this.setState({
        educationArray: educationArray.filter((edu) => edu.id !== id),
      });
    }
  }

  updateExperience(e) {
    const experienceArray = this.state.experienceArray;
    const id = e.target.parentElement.dataset.id;
    const elementID = e.target.dataset.id;
    this.setState({
      experienceArray: experienceArray.map((exp) => {
        return exp.id === id
          ? {
              ...exp,
              [elementID]: e.target.value,
            }
          : exp;
      }),
    });
  }

  addExperience() {
    this.setState({
      experienceArray: [
        ...this.state.experienceArray,
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    });
  }

  deleteExperience(id, e) {
    const experienceArray = this.state.experienceArray;
    if (experienceArray.length <= 1) {
      return;
    } else {
      this.setState({
        experienceArray: experienceArray.filter((exp) => exp.id !== id),
      });
    }
  }

  render() {
    return (
      <div className='Main'>
        <Form
          handleChange={this.handleChange}
          inputValues={this.state}
          updateEducation={this.updateEducation}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
          updateExperience={this.updateExperience}
          addExperience={this.addExperience}
          deleteExperience={this.deleteExperience}
        />
        <MainDisplay displayValues={this.state} />
      </div>
    );
  }
}

export default Main;
