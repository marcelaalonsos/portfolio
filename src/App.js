import { useContext } from "react";
// import { ThemeContext } from './contexts/theme'
//import components here

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return <div></div>;
};

export default App;
