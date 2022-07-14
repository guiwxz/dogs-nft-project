import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const DropzoneWrapper = styled.div`
  background-color: ${colorPalette.primary[700]};
  border: 2px dashed ${colorPalette.primary[600]};
  border-radius: 3px;
  text-align: center;
  color: ${colorPalette.primary[500]};
  padding: 10px;
  outline: none;
  font-size: 16px;

  margin: 14px 0;
`;
