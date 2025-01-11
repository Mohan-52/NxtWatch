import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'
import {BsHouseDoorFill as Home} from 'react-icons/bs'
import {RiPlayListAddLine as Save} from 'react-icons/ri'
import {FaFire as Trend} from 'react-icons/fa'
import {SiYoutubegaming as Gaming} from 'react-icons/si'

const getBackgroundColor = (isDarkTheme, isActive) => {
  if (isDarkTheme) {
    return isActive ? '#383838' : 'transparent'
  }
  return isActive ? '#e2e8f0' : 'transparent'
}

export const HomeIcon = styled(Home)`
  color: ${props => (props.isActive ? ' #ff0000' : 'initial')};
`
export const SaveIcon = styled(Save)`
  color: ${props => (props.isActive ? ' #ff0000' : 'initial')};
`
export const TrendIcon = styled(Trend)`
  color: ${props => (props.isActive ? ' #ff0000' : 'initial')};
`
export const GamingIcon = styled(Gaming)`
  color: ${props => (props.isActive ? ' #ff0000' : 'initial')};
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 20%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  height: 86vh;
  position: sticky;
  top: 14vh;
  left: 0;

  @media (max-width: 767px) {
    display: ${props => (props.visibility ? 'flex' : 'none')};
    width: 70%;
    max-width: 200px;
    position: fixed;
    z-index: 1000;
  }
`

export const RoutesContainer = styled(RouterLink)`
  margin: 0;
  display: flex;
  align-items: center;
  height: 35px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  background-color: ${({isDarkTheme, isActive}) =>
    getBackgroundColor(isDarkTheme, isActive)};
  text-decoration: none;
  padding: 10px;
`

export const Para = styled.p`
  margin-left: 20px;
  font-size: 18px;
`

export const ContactContainer = styled.div``

export const ConactH1 = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  font-weight: 700;
  font-size: 20px;
`

export const ImgsContainer = styled.div`
  display: flex;
`

export const ScoialMediaImgs = styled.img`
  width: 40px;
  margin-right: 10px;
`

export const EnjoyPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  font-weight: 500;
  font-size: 15px;
  max-width: 160px;
`
