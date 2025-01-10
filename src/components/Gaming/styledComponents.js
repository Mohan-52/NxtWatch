import styled from 'styled-components'
import {SiYoutubegaming as GameEmoji} from 'react-icons/si'

export const ViewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`

export const HeroSection = styled.div`
  display: flex;
`

export const TrendBanner = styled.div`
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

export const GamingEmoji = styled(GameEmoji)`
  height: 50px;
  width: 50px;
  color: #ff0000;
`

export const TrendHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  margin-left: 30px;
`

export const BannerAndVideos = styled.div`
  width: 80%;
`

export const GamingVideoUl = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`

export const FailedImgs = styled.img`
  width: 400px;
`

export const VideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  min-height: 80vh;
  padding: 20px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
`

export const FailurePara = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#000')};
`

export const RetryBtn = styled.button`
  border: none;
  background-color: #4f46e5;
  width: 80px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
`
