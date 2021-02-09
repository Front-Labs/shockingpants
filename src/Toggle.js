// import React from 'react';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

function Toggle () {
    const [open, setOpen] = useState(false);
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </>
      </ThemeProvider>
    );
  }
  export default Toggle;