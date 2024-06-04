import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './components/App';

const container = document.getElementById('apps');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
