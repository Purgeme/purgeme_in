import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { ConeGeometry, Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';


export default function BG(props:any) {
    return(
        <div style={{height: 0}}>
            <Canvas style={{position: 'absolute'}}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[-3, 0, 0]} />
              <Cone position={[0, 0, 0]} />
              <Sphere position={[3, 0, 0]} />
            </Canvas>,
        </div>
    )
}

function Box(props:any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Cone(props:any) {
    var y_max:number = 2;
    var y_min:number = -2;
    var y_direction:number = 1;
    // This reference will give us direct access to the mesh
    const meshRef = useRef<Mesh>(null!)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
      meshRef.current.rotation.x += delta;
      if( meshRef.current.position.y <= y_min ) y_direction = 1;
      if( meshRef.current.position.y >= y_max ) y_direction = -1;
      meshRef.current.position.y += delta*y_direction;
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <coneGeometry args={[1, 2, 16]}/>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}

function Sphere(props:any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry args={[1, 12, 8]}/>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}