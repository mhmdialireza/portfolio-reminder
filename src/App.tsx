import { useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import storage from './Utils/storage'

function App() {
  useEffect(() => {
    if (storage.getTheme() == 'dark') {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        storage.setTheme('dark')
      }
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  return <AppRoutes />
}

export default App
