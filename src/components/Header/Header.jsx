import {NavLink} from 'react-router-dom';
import css from './Header.module.css';

function Header() {

    return (
        <div className={css.Header}>
        <h1 className={css.Title}>🎬 MOVIE.style</h1>
          <ul className={css.Headerlist}>
           <li className={css.Element}>
               <NavLink className={css.Element} to="/">Home</NavLink>
           </li>
           <li className={css.Element}>
               <NavLink className={css.Element}  to="/movies">Movies</NavLink>
           </li>
         </ul>
        </div>
    );
  }
  
  export default Header;