import styled from "styled-components";
import "./scss/components/_variables.scss";

// Containers
export const PageContainer = styled.div`
  border: solid 0.1rem #676f9d;
  border-radius: 0.5rem;
  padding: 9rem 1rem 10rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 100%;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: var(--font-bold);
    position: fixed;
    inset: auto 0.5rem 6rem;
    background: #2d3250;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.5rem;
    border: solid 0.1rem #676f9d;
    border-bottom: none;
    padding: 0.5rem;
  }

  @media (min-width: 530px) {
    padding: 11rem 1rem 10rem;
    h1 {
      font-size: 2.5rem;
      inset: auto 0.5rem 7rem;
    }
  }

  @media (min-width: 780px) {
    padding: 8rem 1rem 13rem;
  }

  @media (min-width: 1120px) {
    display: flex;
    gap: 1.5rem;

    h1 {
      font-size: 3rem;
      inset: auto 0.5rem 0rem;
    }
  }
`;

// Products container
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, minmax(100px, auto));
  gap: 1rem;

  @media (min-width: 370px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 530px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1120px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// Page aside feature Container
export const AsideFeature = styled.aside`
  display: flex;
  overflow-x: scroll;
  border: 0.1rem solid #676f9d;
  background: #2d3250;
  position: fixed;
  inset: auto 0.5rem 0;

  .img-box {
    display: flex;
    @media (min-width: 1120px) {
      flex-direction: column;
    }
  }

  img {
    background: #f8b179;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    :hover {
      box-shadow: rgba(248, 177, 121, 0.35) 0px 5px 15px;
      cursor: pointer;
    }
    padding: 0.5rem;
    margin: 1rem 0.8rem;
    width: 4rem;
    border-radius: 0.5rem;
  }

  @media (min-width: 530px) {
    img {
      width: 5rem;
    }

    @media (min-width: 1120px) {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 0.5rem;
      overflow-x: initial;
      position: initial;
      .show-btn {
        display: none;
      }
    }
  }
`;

export const imgContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const imgBox = styled.img`
  background: #f8b179;
  box-shadow: rgba(248, 177, 121, 0.35) 0px 5px 15px;
  padding: 0.5rem;
  width: 4rem;
  border-radius: 0.5rem;

  @media (min-width: 530px) {
    width: 5rem;
  }
`;

// ELEMENTS

// Common Card style
export const Card = styled.div`
  background: #424669;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: var(--font-semibold);
  padding: 0.5rem 1.5rem;
  border-style: none;
  border-radius: 3rem;
  background: #f8b179;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  color: #2d3250;
  :hover {
    box-shadow: rgba(248, 177, 121, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
`;

export const Breadcrumb = styled.ul`
  display: flex;
  li {
    padding: 0.5rem;
    background: black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

// Search

export const SearchBar = styled.div`
  display: flex;
  width: 100%;

  input[type="search"] {
    width: 100%;
    padding: 0.5rem 0.7rem;
    border-radius: 5rem;
    border: none;
    background: #f8b179;
    color: #2d3250;
    font-size: 1.2rem;
    box-shadow: rgba(248, 177, 121, 0.35) 0px 5px 15px;
    ::placeholder {
      color: #2d3250;
    }
    :focus {
      outline: #2d3250;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
  }

  img {
    border-radius: 5rem;
    padding: 0.25rem 1rem;
    width: 4rem;
    background: #f8b179;
    position: absolute;
    right: 13.5rem;
  }

  @media (min-width: 530px) {
    input[type="search"] {
      width: 100%;
      font-size: 1.5rem;
      padding: 0.6rem 0.7rem;
    }

    img {
      width: 7.5rem;
      margin: 0rem 1.1rem;
      padding: 0.2rem 2.3rem;
      right: 23rem;
    }
  }
`;

export const SearchIcon = styled.div`
  img {
    margin: 0 auto;
    border-radius: 5rem;
    padding: 0.1rem 1rem;
    width: 4rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background: #f8b179;
    cursor: pointer;
    
    :hover {
      box-shadow: rgba(248, 177, 121, 0.35) 0px 5px 15px;
    }

    @media (min-width: 530px) {
      width: 7.4rem;
      padding: 0.2rem 2.4rem;
    }
  }
`;
