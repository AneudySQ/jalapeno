import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  existsUsername,
  getUserPublicProfileInfo,
  getProfilePhotoUrl,
} from '../../Firebase/Firebase'

import MenuWapper from '../MenuWapper'
import MenuPublico from '../MenuPublico'


export default function PublicProfileview() {
  const params = useParams();
  const [profile, setProfile] = useState(null)
  const [url, setUrl] = useState(null)
  const [state, setState] = useState(0);

  useEffect(() => {
    getProfile();

    async function getProfile() {
      const username = params.username;

      try {
        const userUid = await existsUsername(username)

        if (userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid)
          setProfile(userInfo)

          const url = await getProfilePhotoUrl(
            userInfo.profileInfo.profilePicture
          );
          setUrl(url)
        } else {
          setState(7)
        }

      } catch (error) { }
    }

  }, [params])

  if (state === 7) {
    return <div>
      <h1>El usuario no Existe MMG</h1>
    </div>
  }



  return (
    <MenuWapper>
      <div className="container m-5">
        <div className="container">
          <img src={url} width={100} />
          <h1 >@{profile?.profileInfo.username}</h1>
          <h1>{profile?.profileInfo.displayName}</h1>
          <div>
            {profile?.categoriesInfo.map((category) => (
              <MenuPublico
                key={category.docId}
                docId={category.docId}
                title={category.title}
                order={category.order}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </div>
    </MenuWapper>
  )



}

