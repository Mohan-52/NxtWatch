import {
  GameVideoContainer,
  ThumbnailImg,
  Title,
  Stats,
  StyledLink,
} from './styledComponents'

import SavedVideosContext from '../../context/SavedVideosContext'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {title, thumbnailUrl, viewCount, id} = videoDetails

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <StyledLink to={`videos/${id}`}>
            <GameVideoContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <Title isDarkTheme={isDarkTheme}>{title}</Title>
              <Stats isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </Stats>
            </GameVideoContainer>
          </StyledLink>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}
export default GamingVideoItem
