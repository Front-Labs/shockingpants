import { useState, useRef } from "react";
import Burger from "./Burger.js";
import Menu from "./Menu.js";
import './animations.scss'
import { StyledWrapper } from "./style.js";
import ClickToClose from './ClickToClose';

function Navbar() {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  ClickToClose(ref, () => setOpen(false));
  return (
    <div ref={ref}>
      <StyledWrapper>
        <div className="studio-logo">
          <img
            src="images/Post-Mark-Black.png"
            alt="logo"
            className="img-black"
          />
          <img
            src="images/Post-Mark-White.png"
            alt="logo"
            className="flicker-image img-white"
          />
          <img
            src="images/Post-Mark-White.png"
            alt="logo"
            className="flicker-image-alternate img-white"
          />
        </div>
        <div className="page-indicator flicker-image-text">
          <p>studio</p>
        </div>
      </StyledWrapper>

      <div id="menu">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
