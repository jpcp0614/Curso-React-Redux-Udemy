import { createRoot } from "react-dom/client";
import './index.css'; // import relativo
import App from './App';

const root = createRoot(document.getElementById('root'))
root.render(<App />);