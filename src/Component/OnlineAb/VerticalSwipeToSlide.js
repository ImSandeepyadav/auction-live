import React, { Component } from "react";
import Slider from "react-slick";
import {
    Avatar,
    Grid,
    Typography,
  } from "@material-ui/core";
  import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
  import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Data = [
    {
      avatar: `/static/images/avatar/1.jpg`,  
      lot: `Lot No. - 123`,
      bid: `Bid 45`,
    },
    {
      avatar: `/static/images/avatar/1.jpg`,  
      lot: `Lot No. - 123`,
      bid: `Bid 45`,
    },
    {
      avatar: `/static/images/avatar/1.jpg`,  
      lot: `Lot No. - 123`,
      bid: `Bid 45`,
    },
    {
      avatar: `/static/images/avatar/1.jpg`,  
      lot: `Lot No. - 123`,
      bid: `Bid 45`,
    },
    {
      avatar: `/static/images/avatar/1.jpg`,  
      lot: `Lot No. - 123`,
      bid: `Bid 45`,
    },
    {
      avatar: `/static/images/avatar/1.jpg`,  
      lot: `Lot No. - 123`,
      bid: `Bid 45`,
    },
    {
        avatar: `/static/images/avatar/1.jpg`,  
        lot: `Lot No. - 123`,
        bid: `Bid 45`,
      },
      {
        avatar: `/static/images/avatar/1.jpg`,  
        lot: `Lot No. - 123`,
        bid: `Bid 45`,
      },
      {
        avatar: `/static/images/avatar/1.jpg`,  
        lot: `Lot No. - 123`,
        bid: `Bid 45`,
      },
      {
        avatar: `/static/images/avatar/1.jpg`,  
        lot: `Lot No. - 123`,
        bid: `Bid 45`,
      },
      {
        avatar: `/static/images/avatar/1.jpg`,  
        lot: `Lot No. - 123`,
        bid: `Bid 45`,
      },
      {
        avatar: `/static/images/avatar/1.jpg`,  
        lot: `Lot No. - 123`,
        bid: `Bid 45`,
      },
  ];

export default class VerticalSwipeToSlide extends Component {
  renderArrows = () => {
    return (
      <div
        className="slider-arrow"
        style={{
          position: "absolute",
          right: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
          
        <div class
          onClick={() => this.slider.slickPrev()}
        >
          <ArrowCircleUpIcon />
        </div>
        
        <div
          style={{
            height: "75%",
            background: "#ccc",
            width: 4,
            marginBottom: 4
          }}
        />
        
        <div
          onClick={() => this.slider.slickNext()}
        >
          <ArrowCircleDownIcon />
        </div>
        
      </div>
    );
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    //   vertical: true,
    //   verticalSwiping: true,
    rows : 2,
      swipeToSlide: true,
      arrows: false,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div style={{ position: "relative", width: '100%' }}>
        {this.renderArrows()}
        <Slider
          ref={(c) => (this.slider = c)}
          style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin:40}}
          {...settings}
        >
         {Data.map((item) => {
                return (
                  <Grid  xs={12} >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginTop: 15
                        }}
                      >
                        <div>
                          <Avatar
                            alt="A"
                            src={item.avatar}
                            sx={{ width: 100, height: 100 }}
                          />
                        </div>
                        <div>
                          <Typography
                            style={{
                              fontFamily: "Segoe UI",
                              fontWeight: 400,
                              fontSize: "16px",
                              color: "#000000",
                            }}
                          >
                            {item.lot}
                          </Typography>
                          <Typography
                            style={{
                              fontFamily: "Segoe UI",
                              fontWeight: 400,
                              fontSize: "16px",
                              color: "#000000",
                              textAlign: "left",
                            }}
                          >
                            {item.bid}
                          </Typography>
                        </div>
                      </div>
                  </Grid>
                );
              })}
        </Slider>
      </div>
    );
  }
}