import {BsX} from 'react-icons/bs'
import {
  BannerConatiner,
  BannerTextCon,
  WebImg,
  Para,
  OutlineBtn,
  RemoveBtn,
} from './styledComponents'

const Banner = props => {
  const {removeBanner} = props
  return (
    <BannerConatiner data-testid="banner">
      <BannerTextCon>
        <WebImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
        <Para>Buy Nxt Watch Premium prepaid palns with UPI</Para>
        <OutlineBtn>GET IT NOW</OutlineBtn>
      </BannerTextCon>

      <RemoveBtn onClick={removeBanner} data-testid="close">
        <BsX />
      </RemoveBtn>
    </BannerConatiner>
  )
}

export default Banner
