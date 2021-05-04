import { useState, useRef } from 'react';
import { GlobalStyles } from './style';
import Burger from './Burger.js';
import Menu from './Menu.js';
import ClickToClose from './ClickToClose'

function Toggle() {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  ClickToClose(ref, () => setOpen(false));
  return (
    <>
      <GlobalStyles/>
      <div id='menu' ref={ref}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
export default Toggle;
