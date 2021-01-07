import React from 'react';

const About = (props) => {
  return (
    <div style = {{marginTop: '2%'}}>
      <center className = 'default'>404</center>
      <center className = 'default'>Sorry but</center>
      <center className = 'default text-danger'>{props.location.pathname}</center>
      <center className = 'default'>Cannot be found</center>
    </div>
  )
}

export default About;
