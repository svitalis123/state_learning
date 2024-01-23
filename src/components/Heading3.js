import {useContext} from 'react';
import { newContext } from './newContext';


export default function Heading3({children}){
  const level = useContext(newContext);

  switch(level){
    case 0:
      throw Error("in exxistence is an heading");
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    default:
      throw Error("case not covered")

  }
}