import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'Projects', description: 'Photos of grocery stores, food trucks, and other commercial projects',},
    { name: 'front-end', description: 'Delicious delicacies' },
    { name: 'back-end', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },   
    { name: 'full-stack', description: 'These are projects that I developed both the front and back end processes on' },  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Skills></Skills>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
