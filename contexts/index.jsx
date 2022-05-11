//https://www.thisdot.co/blog/creating-a-global-state-with-react-hooks

import React from "react"
import { reducer, initialState } from "./reducer"

export const AddressContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const AddressProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AddressContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </AddressContext.Provider>
  )
}
