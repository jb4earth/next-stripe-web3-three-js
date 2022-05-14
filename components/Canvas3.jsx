import css from "../styles/Home.module.css";
import { useLoader, useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import Box from "./Boxx";
import OrbitControls from "./OrbitControls";
import LightBulb from "./LightBulb";
import Floor from "./Floor";
import Draggable from "./Draggable";
import {Suspense} from "react";
import Model from '../public/Archidao_wearable.js'
import React from "react";

function MyRotatingBox() {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a*1;
  });

  return (
    <mesh ref={myMesh}>
    <Suspense fallback={null}>
      <Model/>
    </Suspense>
    </mesh>
  );
}
const light_info = [
  {position: [3,3,0],color:'red',intensity:1},
  {position: [0,3,3],color:'purple',intensity:1},
  {position: [3,3,3],color:'white',intensity:1},
  {position: [0,3,0],color:'blue',intensity:1},
  {position: [-3,3,3],color:'red',intensity:1},
  {position: [3,3,-3],color:'purple',intensity:1},
  {position: [-3,3,-3],color:'white',intensity:1},
  {position: [3,3,3],color:'blue',intensity:1},
]
export default function Canvas3() {
    return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 9, 12],
        }}
      >
      {light_info.map((lightx) => (      <mesh  position={lightx.position}>
              <pointLight castShadow color={lightx.color} intensity={lightx.intensity}  />
              <sphereBufferGeometry args={[.0, 10, 10]} />
              <meshPhongMaterial emissive={"white"} />
            </mesh>))}


        <OrbitControls />

        <MyRotatingBox />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
