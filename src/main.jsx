import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './mainLayout/routes/Routes.jsx'
import AuthContextProvider from './authContext/AuthContext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  </StrictMode>
);
