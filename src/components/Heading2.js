import { useContext } from 'react';
import { LevelContext } from './LevelContext';

function Heading2({ children }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error('heading arleady exists');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    default:
      throw Error('no heading');
  }
}

export default Heading2;
