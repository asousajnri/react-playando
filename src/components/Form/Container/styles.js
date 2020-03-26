import styled from "styled-components";

import devices from "../../../styles/devices";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
    padding: 5rem 3rem;
  }

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,e8e8e8+100&0+61,0.4+100 */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(241, 241, 241, 0) 61%,
    rgba(232, 232, 232, 0.4) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(241, 241, 241, 0) 61%,
    rgba(232, 232, 232, 0.4) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(241, 241, 241, 0) 61%,
    rgba(232, 232, 232, 0.4) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#66e8e8e8',GradientType=0 ); /* IE6-9 */
`;
