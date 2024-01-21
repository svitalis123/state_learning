import React, {useContext} from 'react'
import { LevelContext } from './LevelContext'

function Section2({children}) {
  const level = useContext(LevelContext)
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

export default Section2