import React from 'react';
import { createRoot } from 'react-dom';
import App from './views/App';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(<App />);