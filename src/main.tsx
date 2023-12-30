import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css'
import { App } from './components/App'

const rootElement = document.getElementById('root')
if (rootElement) {
    // Register all content providers here
    // The Redux provider is registered by default
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
    )
}