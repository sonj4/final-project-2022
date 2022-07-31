import React from 'react'
import './profile-settings.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

export default function ProfileSettings() {
  return (
    <>
      <p className='editProfileTitle'>Edit your profile:</p>
      <form className='profileSettingsForm'>
        <div className="imgEdit">
          <img className='profilePictureSettings' src="https://images.pexels.com/photos/12640456/pexels-photo-12640456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <label htmlFor="imgInput"><EditIcon className='profileEditIcons' /> <input type="file" name="imgInput" id="imgInput" /></label>
          <DeleteIcon className='profileEditIcons' />

        </div>
        <div className="textForm">

          <label htmlFor="name">Name:</label>
          <input className='editInput' type="text" id='name' style={{width:"200px"}}/>
          <label htmlFor="surname">Surname:</label>
          <input className='editInput' type="text" id='surname' />
          <label htmlFor="username">Username:</label>
          <input className='editInput' type="text" id='username' />
          <label htmlFor="username">Email:</label>
          <input className='editInput' type="email" id='username' />
          <label htmlFor="psw">Password:</label>
          <input className='editInput' type="password" id='psw' />
          <label htmlFor="confirmPsw">Password:</label>
          <input className='editInput' type="password" id='confirmPsw' />
          <input className='notFoundButton' type="submit" value="Save Changes" />
        </div>

      </form>
    </>
  )
}
