import { Outlet } from "react-router-dom"

import {AiFillGithub} from 'react-icons/ai'

import classes from './App.module.css'


function App() {
  return (
    <div className={classes.app}>
      <h1>BuscaDev <AiFillGithub /> </h1>
      <Outlet />
    </div>
  );
}

export default App
