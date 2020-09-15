import React from 'react';
import './App.css'
import Counter from './components/partials/Counter'
import CountDownTimer from './components/partials/CountDownTimer';

const Course = (props) =>(
    <div className="course">
        <p>Course code: {props.code}</p>
        <p>Course title: {props.title}</p>
        <p>Duration: {props.duration}</p>
    </div>
)

const Courses = () => {

    const curr = [
        {
            title: 'HTML/CSS',
            code: 'DEV211',
            duration: '1 month'
          },
          {
            title: 'Javascript',
            code: 'DEV212',
            duration: '6 weeks'
          },
          {
            title: 'Bootstrap/Tailwind, JQuery & Sass',
            code: 'DEV213',
            duration: '2 weeks'
          },
          {
            title: 'React',
            code: 'DEV214',
            duration: '1 week'
          },
          {
            title: 'Redux/React & Redux',
            code: 'DEV215',
            duration: '1 month'
          },
          {
            title: 'NodeJS/Express',
            code: 'DEV216',
            duration: '6 weeks'
          },
          {
            title: 'MongoDb/Postres',
            code: 'DEV217',
            duration: '🙄'
          }
    ]
    return(
        <div className="courses">
        {curr.map( cour => <Course code = {cour.code} title = {cour.title} duration = {cour.duration} /> )}
        </div>
    )
} 

const App = () => (
    <div className="wrapper">
        <h1 className="header">Code Village SDT1 Syllabus</h1>
        <Courses />
        <Counter/>
        <CountDownTimer/>
    </div>
)
export default App
