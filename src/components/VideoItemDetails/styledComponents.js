import styled from 'styled-components'

export const HeroSecCon = styled.div`
  display: flex;
`

export const CustomReactPlayer = styled.div`
  width: 100%;
  height: auto;

  .react-player {
    width: 97% !important;
    height: 50 !important;
  }

  @media (max-width: 760px) {
    height: 30% !important;
  }
`

export const DetailedVideoContainer = styled.div`
  width: 80%;

  @media (max-width: 760px) {
    width: 100%;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
  font-size: 20px;
`

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ViewsAndTime = styled.div`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#212121')};
  display: flex;
`
export const LikesContainer = styled.div`
  display: flex;
`

export const StatePara = styled.p`
  margin-right: 10px;
`

export const LikeButtons = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  border: none;
  cursor: pointer;
`

export const FlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ProfileImg = styled.img`
  margin-top: 10px;
  margin-right: 10px;
  width: 40px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 4px;
`

export const SubCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#212121')};

  margin-top: 0;
`

export const DescriptionP = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
`

export const VideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  min-height: 80vh;
  padding: 20px;
`
