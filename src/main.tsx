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
        {/* <ToastContainer
          position="bottom-left"
          autoClose={false}
          closeButton
          newestOnTop={false}
          closeOnClick={false}
          bodyClassName="text-sm"
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          theme="light"
        /> */}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
