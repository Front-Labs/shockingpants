import { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import Burger from './Burger.js';
import Menu from './Menu.js';
import useOnClickOutside from './UseOnClickOutside'

function Toggle() {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="logo">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>
      <div ref={ref}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </ThemeProvider>
  );
}
export default Toggle;