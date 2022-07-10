import React, { useState } from "react";
import { Button, theme, themeBlack } from "./theme/styledTheme";
import { ThemeProvider } from "styled-components";
const Dash = () => {
  const [isBlackTheme, setBlackTheme] = useState(false);
  return (
    <div>
      <Button>Normal</Button>

      <ThemeProvider theme={isBlackTheme ? themeBlack : theme}>
        <Button onClick={() => setBlackTheme(!isBlackTheme)}>Themed</Button>
      </ThemeProvider>
    </div>
  );
};
export default Dash;
