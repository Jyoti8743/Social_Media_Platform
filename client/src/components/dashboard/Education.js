import React from 'react'
import { Navigate } from 'react-router'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { deleteEducation } from '../../actions/profile'

const Education = ({education, deleteEducation}) => {
  var isAuthenticated = localStorage.getItem("token") ? true: false;
  if(!isAuthenticated){
    return <Navigate to="/login"/>
    }

    const educations = education && education.map(edu=>(
        <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td><Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '} 
        { edu.to === null ? ('Now') : 
            (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>) 
        }
        </td>
        <td><button onClick={() => deleteEducation(edu._id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    ))
    


  return (
    <>
      <h2 className='my-2'> Education Credentials</h2>
      <table className="table">
        <thead>
            <tr>
                <th>School</th>
                <th className='hide-sm'>Degree</th>
                <th className='hide-sm'>Years</th>
                <th />
            </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  )
}

Education.propTypes = {
education: PropTypes.array.isRequired,
deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education)
