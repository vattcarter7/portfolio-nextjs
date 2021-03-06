import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='portfolio-app'>
      <Navbar />
      {pageProps.appData}
      {Component.name === 'Home' && <Hero />}
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

MyApp.getInitialProps = () => {
  return { pageProps: { appData: 'hello _App Component' } };
};

export default MyApp;
