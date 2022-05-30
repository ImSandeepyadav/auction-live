import React from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GroupsIcon from "@mui/icons-material/Groups";
import raisedHand from '../../static2/raisedHand.png'
import AuctioneerHead from '../../Component/AuctionLive/AuctioneerHead'
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@material-ui/core";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BidCarousel from "./BidCarousel";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const testData = [{ bgcolor: "#008000", completed: 10 }];


const data = {
  src: "https://www.youtube.com/embed/17axz092Qb0",
};


const items = [
    {   
        name: `Internet Bidder`,
        price: `45$`,
        time: `05:06`,
    },
    { 
        name: `Floor Bidder`,
        price: `45$`,
        time: `05:10`,
    },
    { 
        name: `Fair Warning!`,
        price: `45$`,
        time: `06:06`,
    },
    { 
        name: `Floor Bidder`,
        price: `45$`,
        time: `05:10`,
    },
    { 
        name: `Fair Warning!`,
        price: `45$`,
        time: `06:06`,
    },
    { 
      name: `Fair Warning!`,
      price: `45$`,
      time: `06:06`,
  },
  { 
      name: `Floor Bidder`,
      price: `45$`,
      time: `05:10`,
  },
  { 
      name: `Fair Warning!`,
      price: `45$`,
      time: `06:06`,
  },
    
]

const chat = [
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
  {
    avatar: `/static/images/avatar/1.jpg`,
    primary: `LOT`,
    secondary: `DESCRIPTION`,
  },
]

function LiveItem() {
  return (
    <>
     <AuctioneerHead />
    <div style={{margin: '10px', textAlign: 'center'}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <Avatar
                  alt="A"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <div style={{ padding: "10px" }}>
                <Card
                  sx={{
                    minWidth: 275,
                    background: "#F0F0F0",
                    borderRadius: "29.3333px",
                    height: "230px",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontFamily: "Segoe UI",
                        fontWeight: "600",
                        color: "#000000",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      TRUEBLUE AUCTION
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.6,
                        fontFamily: "Segoe UI",
                        fontWeight: "300",
                        color: "#000000",
                      }}
                      color="text.secondary"
                    >
                      Auctioneer
                      <br />
                      description
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.6,
                        fontFamily: "Segoe UI",
                        fontWeight: "300",
                        color: "#000000",
                      }}
                      color="text.secondary"
                    >
                      Auctioneer
                      <br />
                      contact
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.6,
                        fontFamily: "Segoe UI",
                        fontWeight: "300",
                        color: "#000000",
                      }}
                      color="text.secondary"
                    >
                      Auctioneer
                      <br />
                      address
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
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
                    </Typography>
                    <ProgressBar
                      key={idx}
                      bgcolor={item.bgcolor}
                      completed={item.completed} /></>
                  ))}
                
              </div>
              <div style={{ padding: '10px',
                    height: "300px", overflowY: "scroll" , marginTop: '10px' }}>
                {chat.map((item)=>
                <List
                  style={{alignItems: "center",}}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                    <Avatar
                            alt="A"
                            src={item.avatar}
                            sx={{ width: 50, height: 50 }}
                          />
                    </ListItemAvatar>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
                </List>
                )}
              </div>
            
          </Grid>

          <Grid item xs={6}>
            <Typography
              style={{
                padding: "10px",
                textAlign: "center",
                fontFamily: "Segoe UI",
                fontWeight: 600,
                fontSize: "35px",
              }}
            >
              BID ON THIS ITEM
            </Typography>
            <Item style={{ background: "#F0F0F0", borderRadius: "53.3333px" }}>
              <div style={{ padding: "20px" }}>
                  {/* <Carousel slides={slides} arrows={false} autoplay={true} interval={2000} /> */}
                  <BidCarousel />
                <div style={{ padding: "20px" }}>
                  <Typography
                    style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "#000000",
                    }}
                  >
                    HIGH END ART, FIREARMS AND MORE LIVE/ONLINE
                  </Typography>
                  <Typography
                    style={{
                      padding: "20px",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#626262",
                    }}
                  >
                    DATE(S) 16/06/2021 - 26/06/2021
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#2C2C2C",
                    }}
                  >
                    This auction features most items from one local estate!
                    Pewter and metal figural statues from makers Boyett, Pardell
                    and Polland (approx. 40 total pieces) and nearly 80 Frank
                    McCarthy western and Native American art prints. This
                    collection has been in the family for several years and is
                    outstanding quality. Other consignments inc
                  </Typography>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                        fontSize: "22px",
                        color: "#000000",
                      }}
                    >
                      Current bid - $54
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{
                        fontFamily: "Segoe UI",
                        fontWeight: 400,
                        fontSize: "22px",
                        color: "green",
                      }}
                    >
                      Asking - $54
                    </Typography>
                  </div>
                </div>
              </div>
            </Item>
            <div style={{ textAlign: "center", padding: "30px" }}>
              <Button variant="contained" color="success" size="large">
                BID $60
              </Button>
            </div>
          </Grid>

          <Grid item xs>
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
                  color: "#000000",
                }}
              >
                Ayush Kumar
              </Typography>
                <ArrowDropDownIcon />
            </div>
            <Item style={{padding:'20px', background: '#F0F0F0',
                    borderRadius: '53.3333px',
                    }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <GroupsIcon />
                <Typography>124</Typography>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="100%"
                  src={data.src}
                  frameborder="0"
                  allowfullscreen
                />
              </div>
              <Paper
                style={{ background: "#FFFFFF", borderRadius: "13.3333px", padding: "5px", }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "green",
                    }}
                  >
                    Asking - $54
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "16px",
                    }}
                  >
                    Asking - $54
                  </Typography>
                  <Button variant="contained" color="success" size="small">
                    BID $60
                  </Button>
                </div>
              </Paper>
              <div>
                  {items.map((item)=>{
                      return (
                          <>
                      <PriceChat item={item}/>
                      </>
                      )
                  })}
              </div>
              <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                  <img src={raisedHand} style={{height: '40px'}}/>
                      <form>
                      <div>
                          <TextField 
                          style={{background: '#FFFFFF',
                          border: '0.666667px solid #000000',
                          borderRadius: '5px',
                        }}
                          size="small"
                          type="text"
                          placeholder="Type a message"
                          InputProps={{
                            endAdornment: (
                              <IconButton>
                                <SendIcon style={{color: "#000000"}} />
                              </IconButton>
                            ),
                          }}
                          />
                  </div>
                      </form>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
    </>
  );
}

export default LiveItem;

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

const PriceChat = (props) => {
    const {name, price, time} = props.item;
return(
    <div style={{display: 'flex', justifyContent: 'space-between' , padding: '10px',}}>
    <Typography  style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "18px",
                      width: '60%',
                      textAlign: 'left',
                      color: name == 'Fair Warning!' ? 'red' : "black"
                    }}>
    {name}
    </Typography>
    <Typography style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "17px",
                      width: '20%',
                      color: '#000000',
                    }}>
    {price}
    </Typography>
    <Typography style={{
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: "16px",
                      width: '20%',
                      
                    }}>
    {time}
    </Typography>
    </div>
)
}