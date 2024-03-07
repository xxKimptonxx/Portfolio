import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import {  useState } from 'react';
import Homepage from './components/pages/home';
import Page404 from './components/pages/404';
import AboutPage from './components/pages/about';
import ContactPage from './components/pages/contact';
import ProjectsPage from './components/pages/projects';
import Drawer from './components/drawer';
console.log("Made by Kimpton.dev .")

function App() {
  const [dark,isDark] = useState(false)
  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  return (
    <BrowserRouter>
      <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen}/>
      <Header dark={dark} isDark={isDark} openDrawer={setIsDrawerOpen}/>
      <main style={{backgroundColor: dark ? "#121212" : "#e8e8e8" }}>
        <Routes>
          <Route path="/" element={<Homepage dark={dark} />} />
          <Route path="/about" element={<AboutPage dark={dark} />} />
          <Route path="/contact" element={<ContactPage dark={dark} />} />
          <Route path="/projects" element={<ProjectsPage dark={dark} />} />
          <Route path="*" element={<Page404 dark={dark}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
