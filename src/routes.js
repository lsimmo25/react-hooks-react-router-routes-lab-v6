import Home from "./pages/Home.js"
import Directors from "./pages/Directors.js"
import Actors from "./pages/Actors.js"
import Movie from "./pages/Movie.js"
import ErrorPage from "./pages/ErrorPage.js"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "/*",
    element: <ErrorPage />
  }
];

export default routes;