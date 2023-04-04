import * as THREE from "three";
import { useControls } from "leva";
import React from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

const boxGeometry = new THREE.BoxGeometry(2, 2, 2);

export default function Sea({ position = [0, 0, 0] }) {
  const { seaColor } = useControls("Sea", {
    seaColor: {
      value: "#354358",
    },
  });
  const seaMaterial = new THREE.MeshStandardMaterial({
    color: seaColor,
    metalness: 0,
    roughness: 0,
  });

  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <group position={position}>
        <mesh
          geometry={boxGeometry}
          material={seaMaterial}
          position={[0, 0, 0]}
          receiveShadow
          scale={[4, 0.2, 4]}
        />
        <CuboidCollider
          args={[4, 4, 4]}
          position={[0, 0, 0]}
          restitution={0.2}
          friction={1}
        />
      </group>
    </RigidBody>
  );
}
