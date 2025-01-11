import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  HeroSecCon,
  DetailedVideoContainer,
  ViewsContainer,
  CustomReactPlayer,
  Title,
  StatsContainer,
  StatePara,
  ViewsAndTime,
  LikesContainer,
  LikeButtons,
  FlexDiv,
  ProfileImg,
  DetailsContainer,
  ChannelName,
  SubCount,
  DescriptionP,
  VideosContainer,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    liked: false,
    disliked: false,
    saved: false,
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({status: apiStatus.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updateVideoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        status: apiStatus.success,
        videoDetails: updateVideoDetails,
      })
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  loadingView = () => (
    <ViewsContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ViewsContainer>
  )

  handleLikeBtn = () => {
    this.setState(prevState => ({liked: !prevState.liked, disliked: false}))
  }

  handleDisLikeBtn = () => {
    this.setState(prevState => ({disliked: !prevState.disliked, liked: false}))
  }

  successView = () => {
    const {videoDetails, liked, disliked, saved} = this.state
    const {title, viewCount, publishedAt, channel, description} = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const videoURL = videoDetails.videoUrl
    console.log('triggered')

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {addToSavedList, isDarkTheme} = value

          const handleSaveBtn = () => {
            addToSavedList(videoDetails)
            this.setState(prevState => ({saved: !prevState.saved}))
          }

          return (
            <VideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <CustomReactPlayer>
                <ReactPlayer className="react-player" url={videoURL} controls />
              </CustomReactPlayer>
              <Title isDarkTheme={isDarkTheme}>{title}</Title>
              <StatsContainer>
                <ViewsAndTime isDarkTheme={isDarkTheme}>
                  <StatePara>{viewCount}</StatePara>
                  <StatePara>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </StatePara>
                </ViewsAndTime>
                <LikesContainer>
                  <LikeButtons
                    isDarkTheme={isDarkTheme}
                    onClick={this.handleLikeBtn}
                    isActive={liked}
                  >
                    <AiOutlineLike />
                    Like
                  </LikeButtons>
                  <LikeButtons
                    isDarkTheme={isDarkTheme}
                    onClick={this.handleDisLikeBtn}
                    isActive={disliked}
                  >
                    <AiOutlineDislike />
                    DisLike
                  </LikeButtons>
                  <LikeButtons
                    onClick={handleSaveBtn}
                    isDarkTheme={isDarkTheme}
                    isActive={saved}
                  >
                    <RiPlayListAddLine />
                    {saved ? 'saved' : 'save'}
                  </LikeButtons>
                </LikesContainer>
              </StatsContainer>
              <hr />
              <FlexDiv>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <DetailsContainer>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <SubCount isDarkTheme={isDarkTheme}>
                    {subscriberCount} subscribers
                  </SubCount>
                  <DescriptionP isDarkTheme={isDarkTheme}>
                    {description}
                  </DescriptionP>
                </DetailsContainer>
              </FlexDiv>
            </VideosContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderViews = () => {
    const {status} = this.state
    switch (status) {
      case apiStatus.inProgress:
        return this.loadingView()
      case apiStatus.success:
        return this.successView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <HeroSecCon>
          <SideBar />
          <DetailedVideoContainer>{this.renderViews()}</DetailedVideoContainer>
        </HeroSecCon>
      </>
    )
  }
}

export default VideoItemDetails
