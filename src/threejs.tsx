import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { ConeGeometry, Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ListFormat } from "typescript";

export default function BG(props: any) {
  return (
    <div style={{ height: 0 }}>
      <Canvas style={{ position: "absolute" }}>
        <ambientLight intensity={0.7}/>
        <pointLight position={[10, 10, 10]} intensity={100}/>
        <Box y_min={-1} y_max={1.3} position={[-4, 0, 0]} />
        <Cone y_min={-1} y_max={2} position={[0, 1.5, 0]} />
        <Sphere y_min={-1} y_max={1.6} position={[4, 1.6, 0]} />
        {/* <Cone position={[0, 0, 0]} />
        <Sphere position={[3, 0, 0]} /> */}
      </Canvas>
      ,
    </div>
  );
}

function Box(props:any) {
  var y_direction: number = 1;
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    if (meshRef.current.position.y <= props.y_min) y_direction = 1;
    if (meshRef.current.position.y >= props.y_max) y_direction = -1;
    meshRef.current.position.y += delta * y_direction;
  });
  return (
    <mesh
    //   {...props}
      position={props.position}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={"dee2ff"} />
    </mesh>
  );
}

function Cone(props:any) {
  var y_direction: number = 1;
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    if (meshRef.current.position.y <= props.y_min) y_direction = 1;
    if (meshRef.current.position.y >= props.y_max) y_direction = -1;
    meshRef.current.position.y += delta * y_direction;
  });
  return (
    <mesh
    //   {...props}
      position={props.position}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <coneGeometry args={[1, 2, 12]} />
      <meshStandardMaterial color={"dee2ff"} />
    </mesh>
  );
}

function Sphere(props:any) {
  var y_direction: number = 1;
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    if (meshRef.current.position.y <= props.y_min) y_direction = 1;
    if (meshRef.current.position.y >= props.y_max) y_direction = -1;
    meshRef.current.position.y += delta * y_direction;
  });
  return (
    <mesh
    //   {...props}
      position={props.position}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={"dee2ff"} />
    </mesh>
  );
}
