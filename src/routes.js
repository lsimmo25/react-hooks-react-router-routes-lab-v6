import Home from "/home/lsimmo25/Developement/code/phase-2/react-hooks-react-router-routes-lab-v6/src/pages/Home.js"
import Directors from "/home/lsimmo25/Developement/code/phase-2/react-hooks-react-router-routes-lab-v6/src/pages/Directors.js"
import Actors from "/home/lsimmo25/Developement/code/phase-2/react-hooks-react-router-routes-lab-v6/src/pages/Actors.js"
import Movie from "/home/lsimmo25/Developement/code/phase-2/react-hooks-react-router-routes-lab-v6/src/pages/Movie.js"
import ErrorPage from "/home/lsimmo25/Developement/code/phase-2/react-hooks-react-router-routes-lab-v6/src/pages/ErrorPage.js"

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