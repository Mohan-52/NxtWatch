import styled from 'styled-components'
import {RiPlayListAddLine as SaveIcon} from 'react-icons/ri'
import {Link as RouterLink} from 'react-router-dom'

export const SaveEmoji = styled(SaveIcon)`
  height: 50px;
  width: 50px;
  color: #ff0000;
`

export const SavedBanner = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding: 20px;
  height: 20vh;
`

export const EmojiContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : ' #e2e8f0')};
  border-radius: 45%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  margin-left: 30px;

  @media (max-width: 760px) {
    font-size: 20px;
  }
`

export const BannerAndVideos = styled.div`
  width: 80%;
  @media (max-width: 760px) {
    width: 100%;
  }
`

export const SavedVideoUl = styled.ul`
  list-style-type: none;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  margin: 0;
  min-height: 80vh;
  padding-left: 0;
  gap: 10px;

  @media (max-width: 760px) {
    padding: 0;
    width: 100%;
  }
`

export const VideoItemContainer = styled.li`
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
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
