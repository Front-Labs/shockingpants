import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  mix-blend-mode: difference;
  // ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
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
    padding: 2rem 0;
    font-weight: 500;
    letter-spacing: 0.5rem;
    color: white;
    opacity: 0.6;
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
    // }
  }
`;