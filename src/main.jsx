import React from 'react'
import { ApolloProvider } from "@apollo/client"
import ReactDOM from 'react-dom/client'
import { client } from './lib/Apolo'

import './Global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Projects from  './Pages/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogURL" element={<Blog />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>

)
