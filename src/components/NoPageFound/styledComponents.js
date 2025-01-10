import styled from 'styled-components'

export const HeroSection = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 79%;
  height: 86vh;
  max-height: 1000px;
`

export const NotFoundImg = styled.img`
  width: 400px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
`
export const NotFoundPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#000')};
`
