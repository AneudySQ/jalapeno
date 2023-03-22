import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  existsUsername,
  getUserPublicProfileInfo,
  getProfilePhotoUrl,
} from '../../Firebase/Firebase'

import MenuWapper from '../MenuWapper'


export default function PublicProfileview() {

  const params = useParams();
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState('');
  const [state, setState] = useState(0);

  useEffect(() => {
    getProfile();

    async function getProfile() {
      const username = await params.username;

      try {
        const userUid = await existsUsername(username);

        if (userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid);
          setProfile(userInfo);

          const url = await getProfilePhotoUrl(
            userInfo.profileInfo.profilePhotoUrl
          );
          setUrl(url);
        } else {
          setState(7)
        }
      } catch (error) { }
    }

  }, [params]);




  if (state === 7) {
    return <div className="container">
        <h1>
          Este usuario no Existe
        </h1>
      </div>
  }


      return (
      <MenuWapper>
        <div className='container'>
          <div>
            <img src={url} />
          </div>
            <h2>{profile?.profileInfo.username}</h2>
            <h2>{profile?.profileInfo.username}</h2>
          <h2>MENU</h2>
        </div>
      </MenuWapper>

      )
}

