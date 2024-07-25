import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './data/index'
import { Provider } from 'react-redux'
import store, { myPersistStore } from './stores'
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate
                persistor={myPersistStore}
                loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
