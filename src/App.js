import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Projects from './components/Projects.js';
import AllProjects from './components/NewProjects/AllProjects.js';
import Resume from './components/Resume.js';

function App() {
  // ==== Routes ====
  const routes = [
    {
      path: '/',
      exact: true,
      component: AllProjects,
      key: 'default'
    },
    {
      path: '/projects',
      component: AllProjects,
      key: 'project'
    },
    // {
    //   path: '/projects',
    //   component: Projects,
    //   key: 'project'
    // },
    {
      path: '/resume',
      component: Resume,
      key: 'resume'
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
