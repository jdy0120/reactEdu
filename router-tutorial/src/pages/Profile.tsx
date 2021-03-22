import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import WithRouterSample from '../components/WithRouterSample';

type Data = {
  name:string
  description:string
}

interface MatchParams {
  username:string
}

const profileData : { [key: string]: any } = {
  velopert: {
    name: '조도연',
    description: 'Frontend Engineer @ Laftel Inc.'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
}

const Profile = ({ match } :RouteComponentProps<MatchParams>) => {
  const { username } = match.params;
  const profile = profileData[username]
  if (!profile) {
    return <div>존재하지 않는 유저 입니다.</div>
  }
  return (
    <div>
      <h3>
        {profile.name}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;