import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { Toaster } from 'react-hot-toast'
import { App } from './App.jsx'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from './dev/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
      <Toaster />
    </BrowserRouter>
  </Provider>
)
