import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  align-self: center;
  justify-self: center;
  transition: transform .2s;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  margin: 1em;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(221, 221, 221, 1);
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  min-height: 190px;
  border: none;
`