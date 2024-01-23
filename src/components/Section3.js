import React, {useContext} from 'react'
import { newContext } from './newContext'

export default function Section3({children}) {
  const level =  useContext(newContext)
  return (
    <section>
      <newContext.Provider value={level + 1}>
        {children}
      </newContext.Provider>
    </section>
  )
}
