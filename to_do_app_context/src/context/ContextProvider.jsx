import React, { createContext, useState } from 'react'

export const MainContext = createContext(null)

function ContextProvider({ children }) {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const values = {
    items,
    setItems,
    newItem,
    setNewItem
  }

  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
  )
}

export default ContextProvider