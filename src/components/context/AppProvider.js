import React from 'react'
import Context from './context';

export default function AppProvider({children}) {
  
  
  return (
    <Context.Provider value={{
      

    }}>
      {children}
    </Context.Provider>
  )
}
