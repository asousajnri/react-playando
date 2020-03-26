import styled, { css } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  border-radius: 3rem;
  cursor: pointer;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  max-width: 28rem;
  width: 100%;

  ${props =>
    props.primary &&
    css`
      border: 2px solid ${props => props.theme.colors.primary};
      color: #fff;

      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff7900+0,ffa14f+100 */
      background: rgb(255, 121, 0); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        rgba(255, 121, 0, 1) 0%,
        rgba(255, 161, 79, 1) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba(255, 121, 0, 1) 0%,
        rgba(255, 161, 79, 1) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to top,
        rgba(255, 121, 0, 1) 0%,
        rgba(255, 161, 79, 1) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7900', endColorstr='#ffa14f',GradientType=0 ); /* IE6-9 */
    `}

  ${props =>
    props.grey &&
    css`
      border: 2px solid #e3e3e3;
      color: #000;

      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#efefef+0,e0e0e0+100 */
      background: rgb(239, 239, 239); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        rgba(239, 239, 239, 1) 0%,
        rgba(224, 224, 224, 1) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba(239, 239, 239, 1) 0%,
        rgba(224, 224, 224, 1) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        rgba(239, 239, 239, 1) 0%,
        rgba(224, 224, 224, 1) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#efefef', endColorstr='#e0e0e0',GradientType=0 ); /* IE6-9 */
    `}
`;
