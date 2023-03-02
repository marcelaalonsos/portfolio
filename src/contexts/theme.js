import { createContext, useEffect, useState } from "react";
//import PropTypes from "prop-types"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeName(darkMedia.matches ? "dark" : "light");
    darkMedia.addEventListener("change", (e) => {
      setThemeName(e.matches ? "dark" : "light");
    });
  }, []);

  const changeTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, changeTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export { ThemeProvider, ThemeContext };
