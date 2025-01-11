import styled from 'styled-components'
import {GiHamburgerMenu as Hamburger} from 'react-icons/gi'
import {FiLogOut as Logout} from 'react-icons/fi'

export const NavBar = styled.nav`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f4f4f4')};
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 14vh;
  box-sizing: border-box;
`

export const WebLogo = styled.img`
  width: 120px;

  @media (max-width: 760px) {
    width: 100px;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 22%;

  max-width: 200px;

  @media (max-width: 760px) {
    width: 35%;
    max-width: 150px;
  }
`

export const StyledLi = styled.li``

export const NavButtons = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ThemeImg = styled.img`
  width: 30px;
`

export const ProfileImg = styled.img`
  width: 30px;
`

export const HamburgerIcon = styled(Hamburger)`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  display: none;
  font-size: 25px;

  @media (max-width: 760px) {
    display: block;
  }
`
export const LogoutIcon = styled(Logout)`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  display: none;
  font-size: 25px;

  @media (max-width: 760px) {
    display: block;
  }
`

export const OutlineBtn = styled.button`
  border: ${props =>
    props.isDarkTheme ? '1px solid #fff' : '1px solid #00306e'};
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#fff' : '#00306e')};
  width: 80px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 760px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#2c2c2c' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`

export const PopupText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  color: ;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

export const PopupButton = styled.button`
  padding: 10px 20px;
  border: ${props => (props.confirm ? 'none' : '1px solid #64748b')};
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  color: ${props => (props.confirm ? '#ffffff' : '#64748b')};
  &:hover {
    opacity: 0.8;
  }
`
export const ProfileLiCon = styled(StyledLi)`
  @media (max-width: 760px) {
    display: none;
  }
`

export const HamLiCon = styled(StyledLi)`
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`
