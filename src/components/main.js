import React, { Component } from 'react';
import Form from './form/form';
import uniqid from 'uniqid';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        email: '',
        phone: '',
        description: '',
      },
      educationArray: [
        {
          id: uniqid(),
          degree: '',
          school: '',
          location: '',
          dateCompleted: '',
        },
      ],
      experienceArray: [
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
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
    console.log(this.state.personalInfo);
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
      </div>
    );
  }
}

export default Main;
