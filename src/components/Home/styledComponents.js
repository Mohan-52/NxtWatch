import styled from 'styled-components'

export const HeroSecCon = styled.div`
  display: flex;
`

export const BannerAndVideo = styled.div`
  width: 80%;
`

export const VideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : ' #f9f9f9')};
  min-height: 85vh;
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  padding: 5px;
  background-color: transparent;
  outline: none;
  width: 250px;
  border: 1px solid #475569;
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const SearchBtn = styled.button`
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#cccccc')};
  border: 1.4px solid #424242;
  cursor: pointer;
`

export const VideosUl = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`

export const FailedImgs = styled.img`
  width: 400px;
`

export const HomeRouteContainer = styled.div`
  margin: 0;
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
