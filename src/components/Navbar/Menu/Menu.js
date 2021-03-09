import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>

      <motion.a href="#portfolio1"
        whileHover={{ 
        scale: 1.4,
        originX: 0,
        textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Work
      </motion.a>

      {/* <motion.a href="#about"
        whileHover={{ 
        scale: 1.4,
        originX: 0,
        textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Me
      </motion.a> */}

      <motion.a href="#contact"
        whileHover={{ 
        scale: 1.4,
        originX: 0,
        textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Contact
      </motion.a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

// const Menu = ({ open }) => {
//   return (
//     <StyledMenu open={open}>
//      <ul className="menu-buttons">

//         <motion.li
//             whileHover={{ 
//             scale: 1.4,
//             originX: 0,
//             textShadow: "0px 0px 2px rgb(255,255,255)"
//             }}
//             transition={{ type: 'spring', stiffness: 120 }}
//         ><a href="/">
//           Me
//         </a></motion.li>
        
//         <motion.li
//             whileHover={{ 
//             scale: 1.4,
//             originX: 0,
//             textShadow: "0px 0px 2px rgb(255,255,255)"
//             }}
//             transition={{ type: 'spring', stiffness: 120 }}
//         ><a href="/">
//           Work
//         </a></motion.li>

//         <motion.li
//             whileHover={{ 
//             scale: 1.4,
//             originX: 0,
//             textShadow: "0px 0px 2px rgb(255,255,255)"
//             }}
//             transition={{ type: 'spring', stiffness: 120 }}
//         ><a href="/">
//           Contact
//         </a></motion.li>
//      </ul>
//     </StyledMenu>
//   )
// }

// Menu.propTypes = {
//   open: bool.isRequired,
// }

// export default Menu;



