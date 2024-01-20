import React, {useContext} from 'react'
import { contextLevel } from './contextLevel'

function Section({children}) {
  const level = useContext(contextLevel);
  return (
    <section>
      <contextLevel.Provider value={level + 1}>
        {children}
      </contextLevel.Provider>
    </section>
  )
}

export default Section