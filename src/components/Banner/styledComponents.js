import styled from 'styled-components'

export const BannerConatiner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  min-height: 200px;
  max-height: 250px;
  display: flex;
  justify-content: space-between;
`

export const BannerTextCon = styled.div`
  padding: 10px;
  width: 45%;
`

export const WebImg = styled.img`
  width: 150px;
`

export const Para = styled.p`
  font-size: 20px;
`

export const OutlineBtn = styled.button`
  background-color: transparent;
  border: 1px solid #0f0f0f;
  width: 100px;
  height: 40px;
  padding: 5px;
`

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 20px;
  align-self: flex-start;
  cursor: pointer;
`
