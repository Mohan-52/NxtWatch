import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NoPageFound from './components/NoPageFound'
import SavedVideosContext from './context/SavedVideosContext'

import './App.css'

class App extends Component {
  state = {savedVideoList: [], isDarkTheme: false}

  addToSavedList = videoDetails => {
    const {savedVideoList} = this.state
    const {id} = videoDetails
    const isVideoSaved = savedVideoList.some(video => video.id === id)

    if (isVideoSaved) {
      const updatedList = savedVideoList.filter(video => video.id !== id)
      this.setState({savedVideoList: updatedList})
    } else {
      this.setState({savedVideoList: [...savedVideoList, videoDetails]})
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {savedVideoList, isDarkTheme} = this.state
    console.log(isDarkTheme)

    return (
      <SavedVideosContext.Provider
        value={{
          savedVideoList,
          addToSavedList: this.addToSavedList,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NoPageFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedVideosContext.Provider>
    )
  }
}
export default App
