import { Outlet } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import classes from './App.module.css'

export function App() {
  return (
    <div className={classes.app}>
      <GlobalStyle />
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  )
}
