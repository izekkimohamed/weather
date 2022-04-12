import styled from "styled-components";

import imgBg from "../assets/bg.png";
import loadingBg from "../assets/loading.svg";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  @media only screen and (min-width: 850px) {
    height: 100vh;
    grid-template-columns: 1.5fr 3fr;
  }
`;
export const StyledSearchForm = styled.div`
  transform: ${(props) =>
    props.sidebar ? "translateX(0)" : "translateX(-110%)"};

  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
  position: absolute;
  inset: 0;
  height: 100vh;
  width: min(100vw, 500px);
  z-index: 10;
  background-color: var(--bg-secondary);
  transition: 0.2s ease-in-out;
  .close {
    all: unset;
    color: var(--text);
    cursor: pointer;
    align-self: flex-end;
  }

  .input {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    button {
      all: unset;
      background-color: #3c47e9;
      padding: 1rem;
      cursor: pointer;
      border: 1px solid #3c47e9;
      flex-grow: 1;
      text-align: center;
    }
    > div {
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem;
      border: 1px solid var(--text);
      gap: 1rem;
      cursor: pointer;
    }
    label {
      font-size: 1.2em;
      display: grid;
      place-items: center;
      padding: 0.2rem;
    }
  }

  form input {
    all: unset;
    color: var(--text);
  }
  ul li {
    cursor: pointer;
  }
  .options {
    ul {
      list-style: none;

      transform: translateY(-10%);
      opacity: 0;
      gap: 1rem;
      transition: opacity 0.01s ease-in-out, transform 0.2s ease-in-out;
    }
    ion-icon {
      transition: 0.2s ease-in-out;
    }
  }
  .open {
    border: 1px solid var(--text);
    div {
      border: none;
    }
    ul {
      display: grid;
      transform: translateY(0);
      opacity: 1;
    }
    ion-icon {
      transform: rotate(90deg);
    }
  }
  ul li {
    padding: 1rem;
  }
  a {
    text-decoration: none;
    color: var(--text);
  }
  ion-icon {
    cursor: pointer;
  }

  .first-option {
    width: 100%;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--text);
    padding: 1rem;
    color: var(--text);
    cursor: pointer;
    transition: 0.5s ease-in-out;
    svg {
      transition: 0.2s ease-in-out;
    }
  }
`;

export const Main = styled.div`
  background: var(--bg-secondary);
  width: 100vw;
  padding: 1rem 0;
  position: relative;
  @media only screen and (min-width: 850px) {
    width: 500px;
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .header::before {
    content: "";
    position: absolute;
    top: 10%;
    height: 100%;
    width: 100%;
    opacity: 0.1;
    background: url(${imgBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    align-items: center;
    position: relative;
  }
  .open-btn {
    border: none;
    background-color: var(--bg-btn);
    color: var(--text);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .search .search-btn {
    all: unset;
    font-size: 25px;
    padding: 10px;
    background-color: var(--bg-btn);
    border-radius: 50%;
    display: grid;
    cursor: pointer;
  }
  .img {
    width: 259px;
    margin: auto;
  }

  .temp {
    display: grid;
    place-items: center;
    gap: 5rem;
    text-align: center;
    color: var(--text-secondary);
    padding: 15px;
  }
  .temp__main {
    font-weight: 500;
    font-size: 144px;
    line-height: 169px;
    color: var(--text);
  }
  .temp__details {
    display: grid;
    gap: 1.5rem;
  }
  .temp h4 {
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }
  .temp p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
  .temp__city {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .temp__city > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;
export const WeekDays = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 1rem;
  text-align: center;
  color: var(--text-secondary);
  .day {
    width: 160px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--bg-secondary);
  }
  .day .date {
    color: var(--text);
  }
  .day-temp {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .day-temp :nth-child(1) {
    color: var(--text);
  }
  @media only screen and (min-width: 850px) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Degrees = styled.div`
  display: none;
  margin-right: 3rem;
  place-self: end;

  button {
    all: unset;
    background: var(--bg-btn);
    color: var(--text);
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
  @media only screen and (min-width: 850px) {
    display: flex;
    gap: 1rem;
  }
`;

export const Heighlights = styled.div`
  display: grid;
  gap: 2rem;
  .heighlights-wrapper {
    width: 300px;
    background-color: var(--bg-secondary);
    display: grid;
    place-items: center;
    gap: 2rem;
    padding: 1rem;

    .wind {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .wind-icon {
        padding: 0.5rem;
        background-color: var(--bg-btn);
        color: var(--text);
        border-radius: 50%;
        display: grid;
        place-items: center;
      }
      svg {
        transform: ${({ wind_deg }) => `rotate(${wind_deg}deg)`};
      }
    }
    .humidity {
      width: 100%;
      display: grid;
    }
    .progress-nums {
      display: flex;

      justify-content: space-between;
      align-items: center;
    }
    .progress-bar {
      height: 20px;
      background-color: #e7e7eb;
      position: relative;
      border-radius: 10px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percent }) => `${percent}%`};
        height: 100%;
        background-color: #ffec65;
        border-radius: inherit;
      }
      &::after {
        content: "%";
        position: absolute;
        top: 100%;
        right: 0;
      }
    }

    .heighlights-wrapper {
      width: 300px;
      display: grid;
      place-items: center;
    }
    .heighlights-wrapper h2 {
      font-weight: 700;
      font-size: 2em;
      line-height: 75px;
      color: var(--text);
    }
  }
  @media only screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2em;
  font-weight: 700;
  user-select: none;
  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 300px;
    height: 300px;
    background-image: url(${loadingBg});
  }
  h1 {
    animation: loading 2s ease-in-out infinite;
  }
  @keyframes loading {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MoreDetails = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;
