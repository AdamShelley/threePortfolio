import { Debug, Physics } from "@react-three/rapier";
import React from "react";
import Country from "./Land/Country";
import Land from "./Land/West";
import Lights from "./Lights";
import Player from "./Player";

export default function Experience() {
  return (
    <Physics>
      <Debug />
      <Lights />
      <Player />
      <Country />
    </Physics>
  );
}
