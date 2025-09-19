import React from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

interface TinaProviderProps {
  children: React.ReactNode;
}

const TinaProvider: React.FC<TinaProviderProps> = ({ children }) => {
  return (
    <TinaEditProvider
      editMode={
        <div>
          {children}
        </div>
      }
    >
      <div>{children}</div>
    </TinaEditProvider>
  );
};

export default TinaProvider;
