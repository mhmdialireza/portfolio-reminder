import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import './index.css'
import store from './Redux/App/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={false}
          closeButton
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={true}
          bodyClassName="text-sm"
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
