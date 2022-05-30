import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Grid,
  makeStyles,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";
import LogoWhite from "../../static2/logoWhite.svg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import MailIcon from "@mui/icons-material/Mail";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImgs from "../../static2/Bannerimg.svg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from "@mui/material";
import CountDown from './CountDown';
import VerticalSwipeToSlide from "./VerticalSwipeToSlide";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const useStyles = makeStyles(() => ({
  head: {
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));



function OnlineAb(width) {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={classes.head}>
        <img
          src={LogoWhite}
          height={width === "xs" || width === "sm" ? "32px" : "50px"}
          width={width === "xs" || width === "sm" ? "120px" : "200px"}
          alt="logo"
        />
        {/* </Link> */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: "15px",
          }}
        >
          <Avatar
            alt="A"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40 }}
          />
          <Typography
            style={{
              fontFamily: "Segoe UI",
              fontWeight: 400,
              fontSize: "18px",
              color: "#FFFFFF",
            }}
          >
            Ayush Kumar
          </Typography>
          <ArrowDropDownIcon style={{ color:"white" }}/>
        </div>
      </div>

      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ArrowCircleLeftIcon />
            <Typography
              style={{
                fontFamily: "Segoe UI",
                fontWeight: 400,
                fontSize: "18px",
                color: "#727272",
              }}
            >
              Back
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MailIcon />
            <Typography
              style={{
                fontFamily: "Segoe UI",
                fontWeight: 400,
                fontSize: "18px",
                color: "#727272",
              }}
            >
              Join our Mailing List
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            style={{
              fontFamily: "Segoe UI",
              fontWeight: 600,
              fontSize: "25px",
              color: "#000000",
              textDecorationLine: "underline",
            }}
          >
            ONLINE ABSOLUTE AUCTION
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <div>
            <Typography
              style={{
                fontFamily: "Segoe UI",
                fontWeight: 600,
                fontSize: "25px",
                color: "#000000",
              }}
            >
              TODAY’S ONLINE ANTIQUES AUCTION
            </Typography>
            <Typography
              style={{
                fontFamily: "Segoe UI",
                fontWeight: 400,
                fontSize: "25px",
                color: "#000000",
              }}
            >
              By True Blue Auctions
            </Typography>
          </div>
          <div>
            <div style={{ display: "flex", gap: 30 }}>
             <Button variant="contained"  style={{backgroundColor:"black"}} size="small">View Catalog</Button>
             <Button variant="contained" style={{backgroundColor:"black"}} size="small">View Catalog</Button>
             <Button variant="contained" style={{backgroundColor:"black"}} size="small">View Catalog</Button>
            </div>
          </div>
        </div>
        <div>
          <CardItem />
        </div>
      </div>
      <UpcomingItem />
    </div>
  );
}

export default OnlineAb;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const itemData =[
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 100,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 200,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 300,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 400,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
   {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 500,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 200,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 40,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
  {
    lot: `Lot No. 123`,
    Tba: `TBA`,
    time: 20,
    name: `Name`,
    price: `$59`,
    bid: `45`
  },
]
const imgSlide = [
  <img src={BannerImgs} alt="1" height="150px" />,
  <img src={BannerImgs} alt="2" height="150px" />,
  <img src={BannerImgs} alt="3" height="150px" />,
  <img src={BannerImgs} alt="4" height="150px" />,
];

const CardItem = () => {
  return (
    <div>
      <Item style={{ background: "#F0F0F0", borderRadius: "85.3333px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {itemData.map((item)=>
            <Grid item xs={3}>
              <Item style={{ margin: "40px", borderRadius: "21.3333px" }}>
                <div style={{ margin: "5px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <ContentCopyIcon />
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 600,
                          fontSize: "13px",
                          color: "#000000",
                        }}
                      >
                        {item.lot}
                      </Typography>
                    </div>
                  </div>

                  <div style={{ padding: "5px" }}>
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      showArrows={false}
                      infiniteLoop={true}
                      autoPlay={true}
                    >
                      {imgSlide}
                    </Carousel>
                  </div>
                  <hr style={{ border: "0.33333px solid #000000" }} />
                  <div
                    style={{ display: "flex", justifyContent: "space-between", }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleOutlineIcon />
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 700,
                          fontSize: "13px",
                          color: "#000000",
                        }}
                      >
                        {item.Tba}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AccessTimeIcon />
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 700,
                          fontSize: "13px",
                        }}
                      >
                        <CountDown item={item} />
                      </Typography>
                    </div>
                  </div>
                  <hr style={{ border: "0.33333px solid #000000" }} />
                  <div
                    style={{ display: "flex", gap: "10px", padding: "10px" }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        fontWeight: 700,
                        fontSize: "24px",
                        color: "#000000",
                      }}
                    >
                      Item
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                        fontSize: "24px",
                        color: "#000000",
                      }}
                    >
                      {/* Name */}
                      {item.name}
                    </Typography>
                  </div>
                  <div
                    style={{ display: "flex", gap: "30px", padding: "10px" }}
                  >
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 700,
                          fontSize: "24px",
                          color: "#000000",
                        }}
                      >
                        {/* $59 */}
                        {item.price}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "#000000",
                        }}
                      >
                        Current Bid
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 700,
                          fontSize: "24px",
                          color: "#000000",
                        }}
                      >
                        {/* 45 */}
                        {item.bid}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          fontWeight: 400,
                          fontSize: "13px",
                          color: "#000000",
                        }}
                      >
                        Bid
                      </Typography>
                    </div>
                  </div>
                  <div style={{ padding: "5px" , }}>
                    <Button variant="contained" color="success" size="large">
                      BID $60
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            )}
          </Grid>
        </Box>
      </Item>
    </div>
  );
};



const testData = [{ bgcolor: "#008000", completed: 60 }];



const UpcomingItem = () => {
  return (
    <div style={{ padding: "10px" , }}>
      <Item style={{ background: "#F0F0F0", borderRadius: "85.3333px", }}>
          <div >
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={2} style={{justifyContent:'center', display: 'flex', alignItems: "center"}}>
            <Grid item xs={4}>
              <div style={{ padding: "35px", textAlign: 'left' }}>
                <Typography
                  style={{
                    fontFamily: "Segoe UI",
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "#000000",
                  }}
                >
                  Upcoming Items to Bid
                </Typography>
                {testData.map((item, idx) => (
                <><Typography
                    style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    {item.completed}%
                  </Typography><Typography
                    style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                      33 of 200 LOTS REMAINING
                    </Typography><ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed} /></>
                  ))}
              </div>
            </Grid>

            <Grid item xs={8}>
              <VerticalSwipeToSlide />
            </Grid>
          </Grid>
        </Box>
        </div>
      </Item>
    </div>
  );
};

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  // const labelStyles = {
  //   padding: 5,
  //   color: "white",
  //   fontWeight: "bold",
  // };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

