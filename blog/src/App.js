import { useEffect } from 'react';
import './App.css';
import Index from './router/Index';

function App() {


  // useEffect(() => {
  //   // Disable text selection
  //   document.addEventListener('selectstart', preventDefault);

  //   // Disable cut, copy, and paste
  //   document.addEventListener('cut', preventDefault);
  //   document.addEventListener('copy', preventDefault);

  //   // Disable right-click context menu
  //   document.addEventListener('contextmenu', preventDefault);

  //   return () => {
  //     // Clean up event listeners on component unmount
  //     document.removeEventListener('selectstart', preventDefault);
  //     document.removeEventListener('cut', preventDefault);
  //     document.removeEventListener('copy', preventDefault);
  //     document.removeEventListener('contextmenu', preventDefault);
  //   };
  // }, []);

  // const preventDefault = (e) => {
  //   e.preventDefault();
  // };


  return (
    <div className='dark:bg-dark'>
      <Index/>
    </div>
  );
}

export default App;
