import { InfinitySpin } from "react-loader-spinner";
import css from './Loader.module.css';

function Loader() {
    return (
      <div className={css.Spinner}>
        <InfinitySpin
  width='700'
  color="rgb(3,37,65)"
        />
      </div>
    );
  }
  
  export default Loader;