import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom"
import { useEffect } from "react";
import { useLocation } from "react-router";
import {AuthContextProvider} from "./context/AuthContext.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;

root.render(
     <AuthContextProvider>
      <Router>
          <ScrollToTop>
        <App/>
        </ScrollToTop>
      </Router>
     </AuthContextProvider>,
    document.getElementById('root')
  )
