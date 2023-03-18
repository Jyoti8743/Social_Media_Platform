import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addEducation } from '../../actions/profile'
import withRouter from '../routing/withRouter'

const AddEducation = ({addEducation, history}) => {
  var isAuthenticated = localStorage.getItem("token") ? true: false;
  if(!isAuthenticated){
    return <Navigate to="/login"/>
    }
    
    const [formData, setFormData] = useState({
        school:'',
        degree:'',
        fieldofstudy:'',
        from:'',
        to:'',
        current: false,
        discription:''
    });
const [toDateDisabled, toggleDisabled] = useState(false);

const {school, degree, fieldofstudy, from, to, current, discription} = formData

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});


  return (
    <>
    <div>
      <hi className="large text-primary">Add Your Education </hi>
      <p className="lead">
      <i className="fas fa-code-branch" ></i>
      Add any school or bootcamp that you have attended</p>
      <small>* = required field</small> 
      <form className="form" onSubmit={e => {
        e.preventDefault();
        addEducation(formData, history);
      }}>
      <div className="form-group">
        <input type="text" placeholder="School or bootcamp" name='school' value={school} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Degree or Cerificate" name='degree' value={degree} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Field of Study" name='fieldofstudy' value={fieldofstudy} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group">
        <h4>From Date</h4>
      <input type="date" name="from" value={from} onChange={e => onChange(e)} />
        </div>
      <div className="form-group">
       <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {setFormData({...formData, current: !current})
        toggleDisabled(!toDateDisabled)}} />{' '}Current School</p> 
       </div>
       <div className="form-group">
        <h4>to Date</h4>
      <input type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
        </div>
      <div className="form-group">
        <textarea placeholder="Program Description" col="30" row="5" name='description' value={discription} onChange={e =>onChange(e)} ></textarea>
      </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to='/dashboard'>Go Back</Link>
      </form>
    </div>
   </>
  )
}

AddEducation.propTypes = {
addEducation: PropTypes.func.isRequired, 
}

export default connect(null, {addEducation})
(withRouter(AddEducation))


