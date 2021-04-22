import { bool } from 'prop-types';
import { StyledMenu } from './Styled';
import { motion } from 'framer-motion';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>

      <motion.a href="#portfolio"
        whileHover={{ 
        scale: 1.3,
        originX: 0,
        textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Work
      </motion.a>

      <motion.a href="#studio"
        whileHover={{ 
        scale: 1.3,
        originX: 0,
        textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Studio
      </motion.a>

      <motion.a href="#contact"
        whileHover={{ 
        scale: 1.3,
        originX: 0,
        textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        About Me
      </motion.a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;