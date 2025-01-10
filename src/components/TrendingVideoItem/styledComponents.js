import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  display: flex;
  margin: 20px 10px;
`

export const ThumbnailImg = styled.img`
  width: 400px;
`

export const DetailsContainer = styled.div`
  margin-left: 20px;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
  font-size: 16px;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : ' #606060')};
`
export const Stats = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#64748b' : ' #606060')};
`
export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`
