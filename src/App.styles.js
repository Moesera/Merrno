import styled from "styled-components";
import "./scss/components/variables.scss";

export const PageContainer = styled.div`
  border: solid 0.1rem white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h1 {
    text-align: center;
    text-transform: uppercase;
    position: fixed;
    inset: auto 0.5rem 7.1rem;
    background: linear-gradient(95deg, #b97f00, #6b5628);
    border-radius: 0.5rem;
    border: solid 0.1rem white;
    border-bottom: none;
    padding: 0.5rem 1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  // grid-template-rows: repeat(2, minmax(100px, auto));
  gap: 1rem;
`;

export const Card = styled.div`
  background: #dc990a;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
  color: black;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.3rem 1.5rem;
  border-style: none;
  border-radius: 3rem;
  background: black;
  color: white;
`;

export const Category = styled.ul`
  display: flex;
  overflow-x: scroll;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background: linear-gradient(95deg, #b97f00, #6b5628);
  position: fixed;
  inset: auto 0.5rem 0rem;

  img {
    background: black;
    padding: 0.5rem;
    margin: 1rem 0.8rem;
    width: 5rem;
    border-radius: 0.5rem;
  }
`;

export const Breadcrumb = styled.ul`
  display: flex;
  li {
    padding: 0.5rem;
    background: black;
  }
`;
