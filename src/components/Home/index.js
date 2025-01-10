import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  HeroSecCon,
  BannerAndVideo,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  ViewsContainer,
  VideosUl,
  FailedImgs,
  FailureHeading,
  FailurePara,
  RetryBtn,
} from './styledComponents'

import Banner from '../Banner'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  noVideos: 'NO_VIDEOS',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosList: [],
    status: apiStatus.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({status: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        if (data.videos.length === 0) {
          this.setState({status: apiStatus.noVideos})
        } else {
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
          this.setState({videosList: updatedList, status: apiStatus.success})
        }
      } else {
        this.setState({status: apiStatus.failure})
      }
    } catch (error) {
      this.setState({status: apiStatus.failure})
    }
  }

  removeBanner = () => {
    this.setState({showBanner: false})
  }

  loadingView = () => (
    <ViewsContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ViewsContainer>
  )

  failureView = isDarkTheme => {
    const imagesUrl = {
      light:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
      dark:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
    }
    return (
      <ViewsContainer>
        <FailedImgs
          src={isDarkTheme ? imagesUrl.dark : imagesUrl.light}
          alt="failureImg"
        />
        <FailureHeading isDarkTheme={isDarkTheme}>
          Oops Something Went Wrong
        </FailureHeading>
        <FailurePara isDarkTheme={isDarkTheme}>
          We are have some trouble to complete your request .
        </FailurePara>
        <FailurePara isDarkTheme={isDarkTheme}>Please Try Again</FailurePara>
        <RetryBtn onClick={this.getHomeVideos}>Try Again</RetryBtn>
      </ViewsContainer>
    )
  }

  noVideosView = isDarkTheme => {
    console.log(isDarkTheme)
    return (
      <ViewsContainer>
        <FailedImgs
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          alt="NoVideosImg"
        />
        <FailureHeading isDarkTheme={isDarkTheme}>
          No Search results found
        </FailureHeading>
        <FailurePara isDarkTheme={isDarkTheme}>
          Try different key words or remove search filter
        </FailurePara>
        <RetryBtn onClick={this.getHomeVideos} isDarkTheme={isDarkTheme}>
          Retry
        </RetryBtn>
      </ViewsContainer>
    )
  }

  successView = () => {
    const {videosList} = this.state
    return (
      <VideosUl>
        {videosList.map(video => (
          <VideoItem videoDetatils={video} key={video.id} />
        ))}
      </VideosUl>
    )
  }

  renderViews = isDarkTheme => {
    const {status} = this.state
    switch (status) {
      case apiStatus.inProgress:
        return this.loadingView(isDarkTheme)
      case apiStatus.success:
        return this.successView(isDarkTheme)
      case apiStatus.noVideos:
        return this.noVideosView(isDarkTheme)
      case apiStatus.failure:
        return this.failureView(isDarkTheme)
      default:
        return null
    }
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {showBanner, searchInput} = this.state

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HeroSecCon>
                <SideBar />
                <BannerAndVideo>
                  {showBanner && <Banner removeBanner={this.removeBanner} />}

                  <VideosContainer isDarkTheme={isDarkTheme} data-testid="home">
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="search"
                        onChange={this.getSearchInput}
                        value={searchInput}
                        isDarkTheme={isDarkTheme}
                      />
                      <SearchBtn
                        type="button"
                        onClick={this.getHomeVideos}
                        data-testid="searchButton"
                        isDarkTheme={isDarkTheme}
                      >
                        <BsSearch />
                      </SearchBtn>
                    </SearchContainer>
                    {this.renderViews(isDarkTheme)}
                  </VideosContainer>
                </BannerAndVideo>
              </HeroSecCon>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Home
