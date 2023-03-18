import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  var isAuthenticated = localStorage.getItem("token") ? true: false;
      
  if(!isAuthenticated){
    return <Navigate to="/login"/>
    }
  if (loading) return <div>Hello</div>;
 
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);