import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  bg:{
    widthRight:"103.5%",

    first:"#E5E7EB",

    header:{
      color:"#024552",
      underline:"2px solid #4A2E1F"
    },
    footer:{
        bgColor:"#25150e",
        iconSize:{
            height: "50px",
            width: "50px",
            borderRadius: "15px"
        }
    },

  },
  sdw:{
    txSdw:"1px 1px 1px rgba(0,0,0,0.3)",
    bxSdw:"15px 5px 15px rgba(0,0,0,0.3)"
  },
  bgextra:{
    back:"ivory",
    box:"#34495E",
    quote:"#4A6C8A",
    button:"#F48C00",
    font:"#FDE68A",
    buttonHover:"#ffa835ff"
  }
});