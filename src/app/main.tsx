import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { Button } from "silk-task-tracker-ui";
import './index.css'

createRoot(document.getElementById('root')!).render(<Button buttonText={"Yay?"} action={ () => alert("kill urself") } />)
