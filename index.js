import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const AppWithAuth0 = () => {
  return (
    <Auth0Provider
      domain="dev-vww5uztjii8mueib.ca.auth0.com"
      clientId="KTt8aSX2fdx7yyrSkMtPorh6yiFsXh9Q"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<AppWithAuth0 />);

reportWebVitals();
