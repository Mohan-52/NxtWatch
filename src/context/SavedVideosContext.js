import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideoList: [],
  addToSavedList: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
  showSideBar: false,
  toggleSideBar: () => {},
})

export default SavedVideosContext
