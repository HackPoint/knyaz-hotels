import Carousel from 'react-material-ui-carousel';
import { useRef } from 'react';
import { Paper, Button } from '@material-ui/core';
import slider from './slider.module.scss';
/* eslint-disable-next-line */
export interface SliderProps {}

export default function Slider() {
  const imageRef = useRef(null);
  const items = [
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/0J03SqPv4rA.jpg" />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/fYLlICS6RXw.jpg" />
      ),
    },
    {
      image: (
        <img
          ref={imageRef}
          alt=""
          src="../../assets/images/cN-vOPOLpVQ-1.jpg"
        />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/l-ciPDROslw.jpg" />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/NGdFMnlsiic.jpg" />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/Oaaj2TdXRuw.jpg" />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/OzmyT4pbXcE.jpg" />
      ),
    },
    {
      image: (
        <img
          ref={imageRef}
          alt=""
          src="../../assets/images/photo_2018-08-07_10-56-41.jpg"
        />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/tU3Yv-q1r7E.jpg" />
      ),
    },
    {
      image: (
        <img ref={imageRef} alt="" src="../../assets/images/vl04yzbX_7c.jpg" />
      ),
    },
  ];

  return (

    <Carousel >
      {items.map((item,  i) => (
        <Item  key={i} item={item} />
      ))}
    </Carousel>
    
  );
}

function Item(props: any) {
  return (
    <Paper>
      {props.item.image}

       {/* <Button className="CheckButton">
            Check it out!
        </Button> */}
    </Paper>
  );
}
