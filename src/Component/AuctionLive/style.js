import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {},
  sidebarContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRight: "1px solid black",
    // ["@media (max-width:600px)"]: {
    //   display: "block",
    //   borderRight: "0px solid black",
    // },
  },
  sidebarMenuList: {
    listStyle: "none",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    fontWeight: 700,
    color: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default useStyles;
