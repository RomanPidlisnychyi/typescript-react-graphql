import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../utils/routes';

const App: React.FC = () => {
  return (
    <Suspense fallback={false}>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default App;
