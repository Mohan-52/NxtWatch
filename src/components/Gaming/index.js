import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  ViewsContainer,
  HeroSection,
  TrendBanner,
  EmojiContainer,
  GamingEmoji,
  TrendHeading,
  BannerAndVideos,
  GamingVideoUl,
  FailedImgs,
  VideosContainer,
  FailureHeading,
  FailurePara,
  RetryBtn,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {gamingList: [], status: apiStatus.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({status: apiStatus.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok) {
        const updatedList = data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
        }))
        this.setState({gamingList: updatedList, status: apiStatus.success})
      } else {
        this.setState({status: apiStatus.failure})
      }
    } catch (err) {
      this.setState({status: apiStatus.failure})
    }
  }

  loadingView = () => (
    <ViewsContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ViewsContainer>
  )

  failureView = isDarkTheme => (
    <ViewsContainer>
      <FailedImgs
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failureImg"
      />
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops Something Went Wrong{' '}
      </FailureHeading>
      <FailurePara isDarkTheme={isDarkTheme}>
        We are have some trouble to complete your request .
      </FailurePara>
      <FailurePara isDarkTheme={isDarkTheme}> Please Try Again</FailurePara>
      <RetryBtn onClick={this.getGamingVideos} isDarkTheme={isDarkTheme}>
        Try Again
      </RetryBtn>
    </ViewsContainer>
  )

  successView = () => {
    const {gamingList} = this.state

    return (
      <GamingVideoUl>
        {gamingList.map(video => (
          <GamingVideoItem videoDetails={video} key={video.id} />
        ))}
      </GamingVideoUl>
    )
  }

  renderViews = isDarkTheme => {
    const {status} = this.state
    switch (status) {
      case apiStatus.inProgress:
        return this.loadingView()
      case apiStatus.success:
        return this.successView()

      case apiStatus.failure:
        return this.failureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HeroSection>
                <SideBar />
                <BannerAndVideos>
                  <TrendBanner data-testid="banner" isDarkTheme={isDarkTheme}>
                    <EmojiContainer isDarkTheme={isDarkTheme}>
                      <GamingEmoji />
                    </EmojiContainer>
                    <TrendHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </TrendHeading>
                  </TrendBanner>
                  <VideosContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="gaming"
                  >
                    {this.renderViews(isDarkTheme)}
                  </VideosContainer>
                </BannerAndVideos>
              </HeroSection>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Gaming
