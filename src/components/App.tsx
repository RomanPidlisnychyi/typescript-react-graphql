import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Container } from './Layout';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Nav } from './Nav/Nav';
import { routes } from '../utils/routes';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <Nav />
        <Suspense fallback={false}>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Container>
      <Footer />
    </Layout>
  );
};

export default App;
