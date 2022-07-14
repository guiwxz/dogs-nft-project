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

export const ImageInsideDiv = styled.div`
  color: ${colorPalette.primary[300]};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 12px;
  font-size: 14px;
  gap: 4px;
  font-style: oblique;
`;

export const ImageInsidePropsDiv = styled.span`
  color: ${colorPalette.primary[500]};
  font-size: 11px;
`;
