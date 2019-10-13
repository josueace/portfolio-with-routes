// components/ProjectDetails.js

import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';
import queryString from 'query-string'

const projectDetails = (props) => {
  console.log(props)
  const query = queryString.parse(props.location.search)
  console.log(query.pepe); 

  const getProject = (id) => {
   /*
    const theProject = oneProject => {
      return oneProject.id === id;
    }
   return myProjects.find(theProject)// finding object inside array. 
   */ 
   // if separated looks confusing lets do it the way you are used to
   // also notice the verticality problem above, two many lines
   // see below the verticality problem solved and it is easier to understand

    return myProjects.find(ele=>ele.id==id);
        

  };
  
  const { params } = props.match;
  const foundProject = getProject(params.id, 10);
   
  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;