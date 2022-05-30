import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import LogoWhite from '../../static2/logoWhite.svg';

const useStyles = makeStyles(() => ({
  head: {
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const AuctioneerHead = ({ width }) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={classes.head}>
        {/* <Link to={"/"} style={{ padding: 8 }}> */}
          <img
            src={LogoWhite}
            height={width === "xs" || width === "sm" ? "32px" : "50px"}
            width={width === "xs" || width === "sm" ? "120px" : "200px"}
            alt="logo"
          />
        {/* </Link> */}
        <Typography style={{color: "white",padding: '15px'}}>
        Support
        </Typography>
      </div>
    </div>
  );
};

export default AuctioneerHead;
