import React from 'react'
import {Navigate} from 'react-router-dom'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { deleteExperience } from '../../actions/profile'

const Experience = ({experience, deleteExperience}) => {
  var isAuthenticated = localStorage.getItem("token") ? true: false;
      
if(!isAuthenticated){
  return <Navigate to="/login"/>
  }
    const experiences = experience && experience.length != 0 ? experience.map(exp=>(
        <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td><Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '} 
        { exp.to === null ? ('Now') : 
            (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>) 
        }
        </td>
        <td><button onClick={() => deleteExperience(exp._id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    )): <div>No Experience</div>


  return (
    <>
      <h2 className='my-2'> Experience Credentials</h2>
      <table className="table">
        <thead>
            <tr>
                <th>Company</th>
                <th className='hide-sm'>Title</th>
                <th className='hide-sm'>Years</th>
                <th />
            </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  )
}

Experience.propTypes = {
experience: PropTypes.array.isRequired,
deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, {deleteExperience})(Experience)