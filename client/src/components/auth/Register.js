import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register, isAuthenicated}) => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
 });
 const {name, email, password, password2} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
const onSubmit = async e => {
   e.preventDefault();  
   if(password !== password2){
      setAlert('Password do not match', 'danger')
   }else{
      register(name, email, password, password2);
   }
};
var isAuthenticated = localStorage.getItem("token") ? true: false;
if(true){
   return <Navigate to="/dashboard" />
}

return <div className="container">
   
   <h1 className='large text-primary'>Sign up</h1>
   <p className='lead'><i className='fas fa-user'></i>Create Your Account</p>
   <form className='form' onSubmit={e => onSubmit(e)}>
   <div className='form-group'>
   <input type='text' placeholder='Name' name='name' value={name} onChange={e => onChange(e)}  />    
   </div>
   <div className='form-group'>
   <input type='email' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} />
   <small className='form-text'>This site user gravatar so if you want a profile image, Use a gravatar email</small>    
   </div>
   <div className='form-group'>
   <input type='password' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} />    
   </div>
   <div className='form-group'>
   <input type='password' placeholder='Password2' name='password2' value={password2} onChange={e => onChange(e)}  />    
   </div>
   <input type='submit' className='btn btn-primary' value='Register' />
   </form>
   <p className='my-1'>
   Already have an account? <Link to='/login'>Sign In</Link>
   </p>
</div>
}
Register.protoTypes = {
setAlert: PropTypes.func.isRequired,
register: PropTypes.func.isRequired,
isAuthenicated: PropTypes.bool
}
const mapStateToProps = state => ({
   isAuthenicated: state.auth.isAuthenicated
})
export default connect(mapStateToProps, {setAlert, register})(Register);