import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemContainer,
  ThumbnailImg,
  DetailsContainer,
  ChannelName,
  Title,
  Stats,
  StyledLink,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const {name} = channel

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <StyledLink to={`videos/${id}`}>
            <VideoItemContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <Stats isDarkTheme={isDarkTheme}>
                  {viewCount} views {'\u2022'}{' '}
                  {formatDistanceToNow(new Date(publishedAt))}
                </Stats>
              </DetailsContainer>
            </VideoItemContainer>
          </StyledLink>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default TrendingVideoItem
