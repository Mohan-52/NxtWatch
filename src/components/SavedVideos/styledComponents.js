import styled from 'styled-components'

export const ViewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const HeroSection = styled.div`
  display: flex;
`

export const NoVideosContainer = styled.div`
  width: 80vw;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86vh;
  max-height: 1000px;
  flex-direction: column;
  @media (max-width: 760px) {
    width: 100%;
  }
`

export const NoVideoImg = styled.img`
  width: 400px;

  @media (max-width: 760px) {
    width: 300px;
  }
`

export const NoVideoHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#fff' : ' #000')};
  font-size: 25px;
`

export const NoSavedPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : ' #000')};
  width: 90%;
`
