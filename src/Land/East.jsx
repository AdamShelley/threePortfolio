import React from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";
import Sea from "../Sea";

const boxGeometry = new THREE.BoxGeometry(2, 2, 2);

function GreenLand({ position = [0, 0, 0] }) {
  const { floorColor } = useControls("Floor", {
    floorColor: {
      value: "#60a060",
    },
  });
  const floor1Material = new THREE.MeshStandardMaterial({
    color: floorColor,
    metalness: 0,
    roughness: 0,
  });

  return (
    <RigidBody type="fixed" restitution={0.2} friction={100}>
      <group position={position}>
        <mesh
          geometry={boxGeometry}
          material={floor1Material}
          position={[0, 0, 0]}
          receiveShadow
          scale={[4, 0.2, 4]}
        ></mesh>
      </group>
    </RigidBody>
  );
}

export default function East({ position }) {
  return (
    <group position={position}>
      <GreenLand position={[8, 0, 0]} />
      <GreenLand position={[8, 0, -8]} />
      <GreenLand position={[8, 0, -16]} />
      <GreenLand position={[8, 0, -24]} />
      <Sea position={[8, 0, 8]} />
      <GreenLand position={[16, 0, 0]} />
      <GreenLand position={[16, 0, -8]} />
      <GreenLand position={[16, 0, -16]} />
      <GreenLand position={[16, 0, -24]} />
      <Sea position={[16, 0, 8]} />
      <GreenLand position={[24, 0, 0]} />
      <GreenLand position={[24, 0, -8]} />
      <GreenLand position={[24, 0, -16]} />
      <GreenLand position={[24, 0, -24]} />
      <Sea position={[24, 0, 8]} />
      <GreenLand position={[32, 0, 0]} />
      <GreenLand position={[32, 0, -8]} />
      <GreenLand position={[32, 0, -16]} />
      <GreenLand position={[32, 0, -24]} />
      <Sea position={[32, 0, 8]} />
      <GreenLand position={[40, 0, 0]} />
      <GreenLand position={[40, 0, -8]} />
      <GreenLand position={[40, 0, -24]} />
      <Sea position={[40, 0, 8]} />
      <GreenLand position={[48, 0, 0]} />
      <GreenLand position={[48, 0, -8]} />
      <GreenLand position={[48, 0, -24]} />
      <Sea position={[48, 0, 8]} />
      <GreenLand position={[56, 0, 0]} />
      <Sea position={[56, 0, 8]} />
      <Sea position={[64, 0, 8]} />
      <Sea position={[64, 0, 0]} />
      <Sea position={[64, 0, -8]} />
      <Sea position={[56, 0, -8]} />
      <Sea position={[56, 0, -16]} />
      <Sea position={[48, 0, -16]} />
      <Sea position={[40, 0, -16]} />
      <Sea position={[56, 0, -24]} />
    </group>
  );
}
