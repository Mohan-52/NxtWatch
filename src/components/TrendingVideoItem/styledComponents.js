import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  display: flex;
  margin: 20px 10px;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`

export const ThumbnailImg = styled.img`
  width: 400px;

  @media (max-width: 760px) {
    width: 100%;
  }
`

export const DetailsContainer = styled.div`
  margin-left: 20px;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
  font-size: 16px;

  @media (max-width: 760px) {
    font-size: 14px;
  }
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

export const FlexDiv = styled.div`
  @media (max-width: 760px) {
    display: flex;
    align-items: flex-start;
  }
`

export const ProfileImg = styled.img`
  display: none;
  @media (max-width: 760px) {
    display: block;
    margin-top: 25px;
    margin-right: 5px;
    width: 40px;
  }
`
