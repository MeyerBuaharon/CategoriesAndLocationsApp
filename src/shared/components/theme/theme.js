import { injectGlobal } from "styled-components";

injectGlobal`
body{
    margin:0;
    padding:0;
    direction:rtl;
    overflow:hidden;
}
`;

const palette = {
  grey: "#919191",
  black: "#212121"
};

const colors = {
  primary: palette.grey,
  secondary: palette.black
};

export default {
  palette,
  colors
};
