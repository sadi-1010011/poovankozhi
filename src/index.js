import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
// SCREENs
import StartScreen from './screens/startScreen/StartScreen';
import SettingsScreen from './screens/settingsScreen/SettingsScreen';
import GameScreen from './screens/gameScreen/GameScreen';
import NoPage from './screens/noPage/NoPage';
import SetGameScreen from './screens/setGameScreen/SetGameScreen';
import SuccessScreen from './screens/successScreen/SuccessScreen';

// ROUTEs
const router = createBrowserRouter([
  {
    path: "/poovankozhi",
    element: <App />,
    errorElement: <NoPage />
  },
  {
    path: "startscreen",
    element: <StartScreen />,
  },
  {
    path: "settingsscreen",
    element: <SettingsScreen />,
  },
  {
    path: "gamescreen",
    element: <GameScreen />,
  },
  {
    path: "setgamescreen",
    element: <SetGameScreen />,
  },
  {
    path: "successscreen",
    element: <SuccessScreen />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);