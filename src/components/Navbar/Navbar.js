import { useState, useRef } from "react";
import Burger from "./Burger.js";
import Menu from "./Menu.js";
import "./animations.scss";
import { GlobalStyles, StyledWrapper } from "./style.js";
import ClickToClose from "./ClickToClose";

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
            className="flash img-white"
          />
          <img
            src="images/Post-Mark-White.png"
            alt="logo"
            className="flash-alternate img-white"
          />
        </div>

        <div className="page-indicator flash-text">
          {/* <p>{section}}</p> */}
        </div>
      </StyledWrapper>
      <GlobalStyles />
      <div id="menu">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
