import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  ViewsContainer,
  HeroSection,
  TrendBanner,
  EmojiContainer,
  TrendEmoji,
  TrendHeading,
  BannerAndVideos,
  TrendingVideoUl,
  VideosContainer,
  FailureHeading,
  FailurePara,
  RetryBtn,
} from './styledComponents'

import TrendingVideoItem from '../TrendingVideoItem'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {trendingList: [], status: apiStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  loadingView = () => (
    <ViewsContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ViewsContainer>
  )

  getTrendingVideos = async () => {
    this.setState({status: apiStatus.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          viewCount: video.view_count,
          publishedAt: video.published_at,
        }))
        this.setState({trendingList: updatedList, status: apiStatus.success})
      } else {
        this.setState({status: apiStatus.failure})
      }
    } catch (error) {
      this.setState({status: apiStatus.failure})
    }
  }

  successView = () => {
    const {trendingList} = this.state

    return (
      <TrendingVideoUl>
        {trendingList.map(video => (
          <TrendingVideoItem videoDetails={video} key={video.id} />
        ))}
      </TrendingVideoUl>
    )
  }

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
      <FailurePara isDarkTheme={isDarkTheme}>Please Try Again</FailurePara>
      <RetryBtn onClick={this.getTrendingVideos} isDarkTheme={isDarkTheme}>
        Try Again
      </RetryBtn>
    </ViewsContainer>
  )

  renderViews = isDarkTheme => {
    const {status} = this.state
    switch (status) {
      case apiStatus.inProgress:
        return this.loadingView()
      case apiStatus.success:
        return this.successView(isDarkTheme)

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
                      <TrendEmoji />
                    </EmojiContainer>
                    <TrendHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendHeading>
                  </TrendBanner>
                  <VideosContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="trending"
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

export default Trending
