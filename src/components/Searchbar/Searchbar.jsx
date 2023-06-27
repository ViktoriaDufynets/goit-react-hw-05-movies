import { useLocation, useNavigate } from 'react-router-dom';
import css from './Searchbar.module.css';

function Searchbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(event) {
    event.preventDefault();
    const value = event.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
    console.log(value)

    if (value === '') {
      alert('Holly crap! We didnt find any video')
    }
  }

  return (
    <div className={css.Container}>
      <form  className={css.Form} onSubmit={onSubmitForm}>
        <input className={css.Input} type="text" name="query"/>
        <button className={css.Search} type="submit">SEARCH VIDEO
        </button>
      </form>
    </div>
  );

}

export default Searchbar;