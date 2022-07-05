import React from 'react'
import { ApolloProvider } from "@apollo/client"
import ReactDOM from 'react-dom/client'
import { client } from './lib/Apolo'

import './Global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>

)
