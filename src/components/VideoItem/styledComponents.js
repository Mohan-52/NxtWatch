import {Link as RouterLink} from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`

export const VideoItemLi = styled.li`
  padding: 10px;
  width: 280px;
`

export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
  margin-bottom: 4px;
`

export const ChannelName = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#64748b' : ' #606060')};
  margin-bottom: 4px;
`

export const Stats = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#909090')};
`

export const FlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ProfileImg = styled.img`
  margin-top: 25px;
  margin-right: 10px;
  width: 40px;
`
