import {formatDistanceToNow} from 'date-fns'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SavedBanner,
  EmojiContainer,
  SavedHeading,
  BannerAndVideos,
  SavedVideoUl,
  SaveEmoji,
  VideoItemContainer,
  ThumbnailImg,
  DetailsContainer,
  Title,
  Stats,
  ChannelName,
  StyledLink,
} from './styledComponents'

const ShowSavedVideos = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideoList, isDarkTheme} = value

      return (
        <BannerAndVideos>
          <SavedBanner data-testid="banner" isDarkTheme={isDarkTheme}>
            <EmojiContainer isDarkTheme={isDarkTheme}>
              <SaveEmoji />
            </EmojiContainer>
            <SavedHeading isDarkTheme={isDarkTheme}>Saved Videos</SavedHeading>
          </SavedBanner>

          <SavedVideoUl isDarkTheme={isDarkTheme} data-testid="savedVideos">
            {savedVideoList.map(video => {
              const {
                title,
                thumbnailUrl,
                channel,
                viewCount,
                publishedAt,
                id,
              } = video
              const {name} = channel
              return (
                <StyledLink to={`videos/${id}`}>
                  <VideoItemContainer>
                    <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                    <DetailsContainer>
                      <Title isDarkTheme={isDarkTheme}>{title}</Title>
                      <ChannelName isDarkTheme={isDarkTheme}>
                        {name}
                      </ChannelName>
                      <Stats isDarkTheme={isDarkTheme}>
                        {viewCount} views {'\u2022'}{' '}
                        {formatDistanceToNow(new Date(publishedAt))}
                      </Stats>
                    </DetailsContainer>
                  </VideoItemContainer>
                </StyledLink>
              )
            })}
          </SavedVideoUl>
        </BannerAndVideos>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default ShowSavedVideos
