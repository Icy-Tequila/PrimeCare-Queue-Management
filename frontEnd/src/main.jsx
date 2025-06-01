import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AppointmentPatient from './Pages/Appointment.jsx';
import AppointmentForm from './Pages/AppointmentForm.jsx';
import AppointmentConfirmation from './Pages/Appointmentconfirmation.jsx';
import LobbyScreen from './Pages/Lobby.jsx';
import WalkInPatient from './Pages/WalkIn.jsx'; 
import Admin from './Pages/Admin.jsx';

const router = createBrowserRouter([
  {
    path: "/lobby",
    element: <LobbyScreen />,
  },
  {
    path: "/appointment",
    element: <AppointmentPatient />,
  },
  {
    path: "/appointment-form",
    element: <AppointmentForm />,
  },
  {
    path: "/appointment-confirmation",
    element: <AppointmentConfirmation />,
  },
  {
    path: "/walk-in",
    element: <WalkInPatient />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  // You can add a "not found" route or redirects if you want
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
