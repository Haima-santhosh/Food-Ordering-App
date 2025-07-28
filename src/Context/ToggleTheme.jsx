import React from "react"
import { useThemeContext } from "./ToggleThemeContext"

const ToggleTheme = () => {
  const { toggleTheme, darkMode } = useThemeContext()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded border border-gray-400 dark:border-white text-sm dark:text-white"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}

export default ToggleTheme
