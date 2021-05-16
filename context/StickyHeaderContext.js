import React, { createContext, useState } from 'react';

export const StickyHeaderContext = createContext();

const StickyHeaderContextProvider = ({ children }) => {
  const [stickyHeader, setStickyHeader] = useState(false);

  return (
    <StickyHeaderContext.Provider value={{ stickyHeader, setStickyHeader }}>
      {children}
    </StickyHeaderContext.Provider>
  );
};

export default StickyHeaderContextProvider;
