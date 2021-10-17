import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'


const persistConfig = {
  key: 'todos',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
})

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development'
})

const persistor = persistStore(store)

const combinedStore = { store, persistor }

export default combinedStore;