import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  background: transparent;
  opacity: 0.8;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 2000px) {
    position: absolute;
    top: 2.5rem;
    left: 3rem;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 2.5rem;
    left: 3rem;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  


  div {
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media screen and (max-width: 2000px) {
      width: 2rem;
      height: 0.25rem;
    }

    @media screen and (max-width: 1024px) {
      width: 2.5rem;
      height: 0.35rem;
    }

    @media screen and (max-width: 400px) {

    }
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  // mix-blend-mode: difference;
  // ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    color: white;
    opacity: 0.8;
    list-style: none;
    // ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      opacity: 1;
    //   transition: 400ms;
    //   // ${({ theme }) => theme.primaryHover};
    }
  }
`;