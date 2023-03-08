import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Main';

import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
