import React from 'react'
import AutProvider from './AutProvider'
import DasboardWapper from '../DasboardWapper'
import { useNavigate } from 'react-router';
import { useState, useRef } from 'react';

import { setUserProfilePicture } from '../../Firebase/Firebase'

export default function EditProfileView() {

  const [profilePictureUrl, setProfileUrl] = useState(null);
  const fileRef = useRef();


  /* Estas son las validaciones del formulario  de auntentificacion*/
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
  }
  function handleonUserNotRegistered(user) {
    navigate('/login')
  }

  function handleonUserNotloggedIn() {
    navigate('/login');
  }

  function handleOpenFilePicture() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }

  function handleChangeFile(e) {
    const files = e.target.files;
    const fileReader = new FileReader();

    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async function () {
        const imageData = fileReader.result;

        const res = await setUserProfilePicture(currentUser.uid, imageData);
        console.log(res)
      }
    }
  }


  if (state !== 2) {
    return <AutProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotloggedIn={handleonUserNotloggedIn}
      onUserNotRegistered={handleonUserNotRegistered}
    >
    </AutProvider>

  }


  return (
    <DasboardWapper>

      <div className='container'>
        <h2>Edit Profile Info</h2>
        <div>
          <div>
            <img src={profilePictureUrl} alt="" width={100} />
          </div>
          <div>
            <button
              onClick={handleOpenFilePicture}>
              Choose new profile Pinture
            </button>
            <input
              ref={fileRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleChangeFile}
            />
          </div>
        </div>
      </div>

    </DasboardWapper>
  )
}