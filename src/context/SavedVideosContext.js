import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideoList: [],
  addToSavedList: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
})

export default SavedVideosContext
