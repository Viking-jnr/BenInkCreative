import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <BrowserRouter>
    <CssBaseline />
      <Header />
    </BrowserRouter>
  )
}

export default App