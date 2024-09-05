import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from "./MainLayout";
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <MainLayout>
      <HomePage />
    </MainLayout>,
  },
])
function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
