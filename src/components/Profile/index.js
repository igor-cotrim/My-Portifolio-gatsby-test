import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import * as S from './styled'
import Avatar from '../Avatar'

const Profile = () => {
  const {
    site: {
      siteMetadata: {title, position, description},
    }
  } = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        position
        title
        description
      }
    }
  }
`)

return (
  <S.ProfileWrapper className="Profile-wrapper">
    <S.ProfileLink>
      <Avatar/>
      <S.ProfileAuthor>
        {title}
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileAuthor>
    </S.ProfileLink>
    <S.ProfileDescription>{description}</S.ProfileDescription>
  </S.ProfileWrapper>
)
}

export default Profile