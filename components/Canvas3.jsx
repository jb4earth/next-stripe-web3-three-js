import css from "../styles/Home.module.css";
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import Box from "./Boxx";
import OrbitControls from "./OrbitControls";
import LightBulb from "./LightBulb";
import Floor from "./Floor";
import Draggable from "./Draggable";
import {Suspense} from "react";
import Test from './Test.js'

export default function Canvas3() {
    return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Test/>
        </Suspense>
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
