import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';

function App() {
  // ==== Routes ====
  const routes = [
    {
      path: '/',
      exact: true,
      component: Home,
      key: 'default'
    },
    {
      path: '/projects',
      component: Projects,
      key: 'project'
    }

  ];
 
  return (
      <BrowserRouter>
        {routes.map((route) => {
          return (
            <Route
              component={route.component}
              path={route.path}
              key={route.key}
              exact={route.exact}
            />
          );
        })}
      </BrowserRouter>
  );
};

export default App;
