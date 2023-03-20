import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {
  existsUsername,
  getProfilePhotoUrl,
  getUserPublicProfileInfo,
} from '../../Firebase/Firebase'
import MenuWapper from '../MenuWapper';

export default function PublicProfileview() {

  const params = useParams();
  const [profile, setProfile] = useState(null)
  const [url, setUrl] = useState('')

  useEffect(() => {
    getProfile();

    async function getProfile() {
      const username = params.username;

      try {
        const userUid = await existsUsername(username);  

        if (userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid);
          setProfile(userInfo);

          const url = await getProfilePhotoUrl(
            userInfo.profileInfo.profilePicture
          );
          setUrl(url);
        };
      } catch (error) { }

    }

  }, [params]);  

  return (
    <MenuWapper>
      <div className='container'>
        <div>
          <div>
            <img src={url}  />
          </div>
           <h2>{profile?.profileInfo.username}</h2>
 *        <h3>UserName</h3>
          <div>Usuario</div>
        </div>

      </div>
    </MenuWapper>
  )
}