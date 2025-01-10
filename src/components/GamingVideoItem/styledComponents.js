import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

export const GameVideoContainer = styled.li`
  margin: 20px;
`

export const ThumbnailImg = styled.img`
  width: 250px;
  height: 300px;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
  font-size: 16px;
`

export const Stats = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#909090')};
`
export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`
