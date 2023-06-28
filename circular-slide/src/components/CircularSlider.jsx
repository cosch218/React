import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react'


const WIDTH = 300;
const RADIUS = WIDTH / 2;
const SATELLITE_WIDTH = 100;
const SATELLITE_RADIUS = SATELLITE_WIDTH / 2;

const OFFSET = RADIUS - SATELLITE_RADIUS - 2;
const PERIMETER = 2 * Math.PI * RADIUS;

const DATA = ["A", "B", "C", "D", "E", "F"];
var isLeft = false;
var isTop = false;
var cumTheta = 0;


export default function CircularSlider() {

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag((state) => animate(state));

  const animate = ({ event, initial: [ix, iy], movement: [dx, dy] }) => {
    isLeft = ix - event.target.offsetLeft < RADIUS;
    isTop = iy - event.target.offsetTop < RADIUS;
    cumTheta += isLeft ? -dy / 30 : dy / 30;
    cumTheta += isTop ? dx / 100 : -dx / 100;
    api.start({ x: 0, y: cumTheta });
  };


  return (
    <div className="wrapper">
      <h3>Circular Slider - WIP</h3>
      <div
        className="circle"
        style={{
          width: `${WIDTH}px`,
          height: `${WIDTH}px`
        }}
        {...bind()}
      >
        {DATA.map((item, i) => (
          <Satellite
            key={"sate" + i}
            index={i}
            theta={y}
            gap={360 / DATA.length}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}


const Satellite = ({ index, theta, gap, item }) => {
  return (
    <animated.div
      className="satellite"
      style={{
        width: `${SATELLITE_WIDTH}px`,
        height: `${SATELLITE_WIDTH}px`,
        x: theta.to(
          (t) =>
            `${
              RADIUS * Math.cos((t + index * gap) * (Math.PI / 180)) + OFFSET
            }px`
        ),
        y: theta.to(
          (t) =>
            `${
              RADIUS * Math.sin((t + index * gap) * (Math.PI / 180)) + OFFSET
            }px`
        )
      }}
    >
      {item}
    </animated.div>
  );
}