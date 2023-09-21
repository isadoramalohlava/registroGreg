import { useState } from 'react';
import { Photo } from './components/Photo';
import { Register } from './pages/Register';
import styles from './App.module.css';
import { LoginMenu } from './pages/LoginMenu';
import { Password } from './pages/Password';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
  <RouterProvider router={router}/>
  )
}

export default App
