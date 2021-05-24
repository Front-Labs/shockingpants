import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 1.5rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  .studio-logo {
    width: 100%;
    img {
      width: 100%;
    }
    .img-white {
      transform: translate(-100%, 0);
      position: absolute;
    }
    .img-black {
      position: static;
    }
  }

  .page-indicator {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    transform: rotate(-8deg);
    p {
      color: white;
      margin: 0;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 1280px) and (orientation: portrait) {
    width: 20%;
    left: 1rem;
    .page-indicator {
      font-size: 11px;
      letter-spacing: 0.25rem;
    }
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    width: 10%;
    left: 4rem;
    .page-indicator {
      font-size: 12px;
      letter-spacing: 0.3rem;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 10%;
    left: 4rem;
    .page-indicator {
      font-size: 18px;
      letter-spacing: 0.5rem;
    }
  }

  .flicker-image {
    animation: flicker 1100ms alternate infinite;
  }

  .flicker-image-alternate {
    animation: flicker 1000ms alternate infinite;
  }

  .flicker-image-text {
    animation: flicker-image-text 1500ms alternate infinite;
  }

  @keyframes flicker-image-text {
    0% {
      opacity: 0.9;
    }
    10% {
      opacity: 0.7;
    }
    20% {
      opacity: 0.8;
    }
    30% {
      opacity: 0.9;
    }
    40% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.7;
    }
    60% {
      opacity: 0.8;
    }
    70% {
      opacity: 0.9;
    }
    80% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.9;
    }
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.7;
    }
    20% {
      opacity: 0.8;
    }
    30% {
      opacity: 0.9;
    }
    40% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.9;
    }
    60% {
      opacity: 0.7;
    }
    70% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.2;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

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
  z-index: 2;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1280px) and (orientation: portrait) {
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    position: absolute;
    top: 2.5rem;
    right: 3rem;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 2.5rem;
    right: 3rem;
  }

  div {
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(50deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-50deg)" : "rotate(0)")};
    }

    @media screen and (max-width: 1280px) and (orientation: portrait) {
      width: 1.9rem;
      height: 0.25rem;
    }

    @media screen and (max-width: 1280px) and (orientation: landscape) {
      width: 2.5rem;
      height: 0.25rem;
    }

    @media screen and (min-width: 1280px) {
      width: 2.5rem;
      height: 0.25rem;
    }
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: transparent;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;

  @media screen and (max-width: 1280px) and (orientation: portrait) {
    position: fixed;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1),
      black,
      black,
      black
    );
    height: 100%;
    width: 100%;
    padding-top: 1.5rem;
    top: 0;
    padding-top: 50%;
    padding-left: 20%;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    position: absolute;
    top: 5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 5rem;
    padding-top: 10%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }

  a {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.5rem;
    color: white;
    opacity: 0.8;
    text-decoration: none;
    transition: color 0.3s linear;
    margin-right: 3rem;

    p {
      font-size: 1rem;
    }

    @media screen and (max-width: 1280px) and (orientation: portrait) {
      font-size: 1rem;
      padding: 1.3rem;
      text-align: center;
    }

    @media screen and (max-width: 1280px) and (orientation: landscape) {
      font-size: 1rem;
      padding-bottom: 1.7rem;
    }

    @media screen and (min-width: 1280px) {
      font-size: 2rem;
      padding: 1.5rem;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
