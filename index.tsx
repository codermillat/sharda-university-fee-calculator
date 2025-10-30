
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    document.body.innerHTML = '<div style="padding:20px;font-family:sans-serif;"><h1>Error: Root element not found</h1></div>';
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to initialize app:', error);
  document.body.innerHTML = '<div style="padding:20px;font-family:sans-serif;"><h1>Error loading app</h1><p>' + (error as Error).message + '</p></div>';
}
