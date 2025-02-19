"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { useTheme } from "../contexts/ThemeContext"

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()
  const { theme } = useTheme()

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className={`p-3 rounded-full font-semibold text-sm transition-all duration-300 ease-in-out
        ${
          theme === "light"
            ? "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
            : "bg-blue-400 text-gray-900 hover:bg-blue-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
        }`}
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  )
}

