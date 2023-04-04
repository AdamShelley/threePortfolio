import React from "react";

import West from "./West";
import East from "./East";

export default function Country({ position }) {
  return (
    <group position={position}>
      <West />
      <East />
    </group>
  );
}
