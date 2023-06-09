import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import Landing from './components/layout/Landing'; 
import Register from './components/auth/Register'; 
import Login from './components/auth/Login'; 
import Alert from './components/layout/Alert'; 
import {loadUser} from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import './App.css';   

//Redux
import {Provider} from 'react-redux';
import store from './store'                   
import { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(()=> {
    store.dispatch(loadUser())
  }, [])
  
  return(
  <Provider store={store}>
    
   <BrowserRouter>
    <>
      <Navbar />
      <section className='container'>
      <Alert/>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profiles' element={<Profiles />} />
        <Route exact path='/profile/:id' element={<Profile />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/create-profile' element={<CreateProfile /> } />
        <Route exact path='/edit-profile' element={<EditProfile /> } />
        <Route exact path='/add-experience' element={<AddExperience />} />
        <Route exact path='/add-education' element={<AddEducation />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/posts/:id' element={<Post />} />
      </Routes>
      </section>

    </>
   </BrowserRouter>
  </Provider>
)};
export default App;
