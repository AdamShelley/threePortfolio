import "./App.css";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import { Leva } from "leva";
import { Perf } from "r3f-perf";

function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Leva position="topleft" />

      <Canvas
        shadows
        camera={{
          fov: 60,
          near: 0.1,
          far: 200,
          position: [0, 10, 8],
        }}
      >
        <color args={["#3f89b1"]} attach="background" />
        <Perf position="top-left" />
        {/* <OrbitControls makeDefault /> */}
        <Experience />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
