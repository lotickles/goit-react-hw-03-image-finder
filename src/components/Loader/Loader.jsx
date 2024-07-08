import css from './Loader.module.css';
import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <div className={css.loaderBox}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  );
};

export default Loader;
