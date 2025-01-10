import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemLi,
  ThumbnailContainer,
  DetailsContainer,
  Title,
  ChannelName,
  Stats,
  StyledLink,
  FlexDiv,
  ProfileImg,
} from './styledComponents'

import SavedVideosContext from '../../context/SavedVideosContext'

const VideoItem = props => {
  const {videoDetatils} = props
  const {
    title,
    id,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetatils
  const {name, profileImageUrl} = channel
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <StyledLink to={`videos/${id}`}>
              <VideoItemLi>
                <ThumbnailContainer>
                  <img src={thumbnailUrl} alt="video thumbnail" />
                </ThumbnailContainer>

                <FlexDiv>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <DetailsContainer>
                    <Title isDarkTheme={isDarkTheme}>{title}</Title>
                    <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                    <Stats isDarkTheme={isDarkTheme}>
                      {viewCount} views {'\u2022'}
                      {formatDistanceToNow(new Date(publishedAt))}
                    </Stats>
                  </DetailsContainer>
                </FlexDiv>
              </VideoItemLi>
            </StyledLink>
          </>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default VideoItem
