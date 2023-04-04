import * as THREE from "three";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, vec3 } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useControls } from "leva";

export default function Player() {
  const player = useRef();

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(100, 100, 100)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  // const { impulseStrength, torqueStrength } = useControls("Player Speed", {
  //   impulseStrength: 20,
  //   torqueStrength: 10,
  // });

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 10 * delta + 5;
    const torqueStrength = 10 * delta + 5;

    const position = vec3(player.current.translation());

    player.current.setLinvel({ x: 0, y: 0, z: 0 });
    player.current.setAngvel({ x: 0, y: 0, z: 0 });
    player.current.setTranslation(position);

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulseStrength;

      torque.x += torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    player.current.applyImpulse(impulse, true);
    player.current.applyTorqueImpulse(torque, true);

    // Camera

    const bodyPosition = player.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 10.25;
    cameraPosition.y += 10.65;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);
  });

  return (
    <RigidBody
      colliders="ball"
      restitution={0.2}
      friction={2}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 1, 0]}
      ref={player}
    >
      <mesh castShadow>
        <cylinderGeometry args={[0.5, 0.5, 1, 50]} />
        <meshStandardMaterial flatShading color="red" />
      </mesh>
    </RigidBody>
  );
}
