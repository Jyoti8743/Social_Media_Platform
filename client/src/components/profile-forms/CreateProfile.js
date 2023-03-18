import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile} from '../../actions/profile'
  
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const CreateProfile = ({createProfile, history}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });
  const[displaySocialInputs, toggleSocialInputs] = useState(false);
  const  {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history)
  }
    return (
    <>
    <div>
      <hi className="large text-primary">Create Profile</hi>
      <p className="lead">
      <i className="fas fa-user" ></i>
      Let's Go some imformation to make your Profile stamd out</p>
      <small>* = required field</small> 
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e =>onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Devloper">* Developer</option>
            <option value="Junior Developer">* Junior Developer</option>
            <option value="Senior Developer">* Senior Developer</option>
            <option value="Manager">* Manager</option>
            <option value="Student or Learning">* Student or Learning</option>
            <option value="Instructor">* Instructor or Teacher</option>
            <option value="Intern">* Intern</option>
            <option value="Other">* Other</option>
          </select>
          <small className="form-text">Give us an idea of where you are at in career</small>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Company" name='company' value={company} onChange={e =>onChange(e)} />
        <small className="form-text">Could be your own Company or one your work for</small>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Website" name='website' value={website} onChange={e =>onChange(e)} />
        <small className="form-text">Could be your own Website</small>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Location" name='location' value={location} onChange={e =>onChange(e)} />
        <small className="form-text">City & state Suggested(eg. Boston, MA)</small>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Skills" name='skills' value={skills} onChange={e =>onChange(e)} />
        <small className="form-text">Please Use comma seperated value(eg. HTML, JAVASCRIPT, CSS, PHP)</small>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Github Username" name='githubusername' value={githubusername} onChange={e =>onChange(e)} />
        <small className="form-text">If you want to your latest repos and a Github Link, Include your username name</small>
      </div>
      <div className="form-group">
        <textarea placeholder="A short bio of yourself" name='bio' value={bio} onChange={e =>onChange(e)} ></textarea>
        <small className="form-text">Tell us a little about yourself</small>
      </div>
      <div className="my-2">
        <button onClick={()=> toggleSocialInputs(!displaySocialInputs)} type='button' className="btn btn-light">Add Social Network Link</button>
        <span>Optional</span> </div>
        
        {displaySocialInputs && <>
          <div className="form-group social-input">
          <i className='fab fa-twitter fa-2x'></i>
        <input type="text" placeholder="Twitter URL" name='twitter' value={twitter} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group social-input">
          <i className='fab fa-facebook fa-2x'></i>
        <input type="text" placeholder="Facebook URL" name='facebook' value={facebook} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group social-input">
          <i className='fab fa-youtube fa-2x'></i>
        <input type="text" placeholder="YouTube URL" name='youtube' value={youtube} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group social-input">
          <i className='fab fa-linkedin fa-2x'></i>
        <input type="text" placeholder="Linkedin URL" name='linkedin' value={linkedin} onChange={e =>onChange(e)} />
      </div>
      <div className="form-group social-input">
          <i className='fab fa-instagram fa-2x'></i>
        <input type="text" placeholder="Instagram URL" name='instagram' value={instagram} onChange={e =>onChange(e)} />
      </div>
        </>}
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to='/dashboard'>Go Back</Link>
      </form>
    </div>
    </>
  )
}


CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
}


export default connect(null, {createProfile})(withRouter(CreateProfile))