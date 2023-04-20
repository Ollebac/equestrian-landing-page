import './scss/styles.scss';

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Programs from './components/Programs';
import About from './components/About';
import Coaches from './components/Coaches';
import Reviews from './components/Reviews';
import ImagePanel from './components/ImagePanel';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className='main_content'>
      <Nav />
      <Welcome />
      <Programs />
      <About />
      <Coaches />
      <Reviews />
      <ImagePanel />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
