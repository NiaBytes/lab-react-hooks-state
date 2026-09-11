import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={() => setDarkMode((mode) => !mode)}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'} {/* TODO: Update this text from Dark to Light dynamically */}
    </button>
  )
}

export default DarkModeToggle
