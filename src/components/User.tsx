import { UserProps } from "../types/user"

import {MdLocationPin} from 'react-icons/md'
import {FaArrowDown} from 'react-icons/fa'

import { Link } from "react-router-dom"
import classes from './User.module.css'

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && (
              <p className={classes.location}>
              <MdLocationPin />
              <span>{location}</span>
              </p>
        )}
        <div className={classes.stats}>
            <div>
                <p className={classes.number}>Seguidores <FaArrowDown /></p>
                <p>{followers}</p>
            </div>
            <div>
                <p className={classes.number}>Seguindo <FaArrowDown/> </p>
                <p>{following}</p>
            </div>
        </div>
            <Link className={classes.link} to={`/repos/${login}`}>Ver melhores projetos</Link> 
    </div>
  )
}

export default User