import React from 'react';
import ReactDOM from 'react-dom/client';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetaMaskUIProvider sdkOptions={{
      dappMetadata: {
        name: "EthInk",
      }
    }}>
      <App />
    </MetaMaskUIProvider>
  </React.StrictMode>
);
