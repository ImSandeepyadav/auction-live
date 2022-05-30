import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
  StackedCarouselSlideProps,
} from "react-stacked-center-carousel";
import banImg from "../../static2/Bannerimg.svg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const data = [
  {
    cover: banImg,
    title: "Interstaller",
  },
  {
    cover: banImg,
    title: "Interstaller",
  },
  {
    cover: banImg,
    title: "Interstaller",
  },
  {
    cover: banImg,
    title: "Interstaller",
  },
  {
    cover: banImg,
    title: "Interstaller",
  },
];

export default function BidCarousel() {
  const ref = React.useRef();

  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center"}}>
      <div onClick={() => ref.current.goBack()}><ArrowBackIosIcon /></div>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          else if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              data={data}
              carouselWidth={parentWidth}
              slideWidth={400}
              slideComponent={Slide}
              maxVisibleSlide={5}
              currentVisibleSlide={currentVisibleSlide}
              useGrabCursor={true}
            />
          );
        }}
      />
      <div onClick={() => ref.current.goNext()}><ArrowForwardIosIcon /> </div>
    </div>
  );
}

const Slide = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div style={{ width: "100%", height: 300, userSelect: "none" }}>
      <img
        style={{
          height: "100%",
          width: "80%",
          objectFit: "cover",
          borderRadius: 10,
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );
});