import React, {useContext} from 'react'
import { contextLevel } from './contextLevel';


function Heading({children }) {
  const level = useContext(contextLevel)

    switch(level){
      case 0:
       throw Error("there must be an heading")
      case 1:
        return <h1>{children}</h1>
      case 2:
        return  <h2>{children}</h2>
      case 3:
        return <h3>{children}</h3>
      case 4:
        return <h4>{children}</h4>
      case 5:
        return <h5>{children}</h5>
      default:
        throw Error("error in content")
    }
}

export default Heading