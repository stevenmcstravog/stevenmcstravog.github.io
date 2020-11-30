import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="content mx-auto">
          <About window={window} />
          <Projects />
          <Experience />
          <Footer />
    </div>
  );
}

export default App;