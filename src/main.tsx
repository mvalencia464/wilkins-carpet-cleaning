import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

const TinaWrapper = () => {
  return (
    <TinaEditProvider
      editMode={
        <div>
          <App />
        </div>
      }
    >
      <App />
    </TinaEditProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TinaWrapper />
  </StrictMode>
);
