import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 12px;
  border: solid 1px ${colorPalette.primary[700]};
`