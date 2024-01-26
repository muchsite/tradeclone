import { Canvas, useFrame } from "@react-three/fiber";
import "./coin.scss";
import { useRef, useState } from "react";
import {
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper, TextureLoader } from "three";

// const Cube = ({ position, side, color }) => {
//   const ref = useRef();

//   return (
//     <mesh position={position} ref={ref}>
//       <boxGeometry args={[side, side, side]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// };

// const Torus = ({ position, args, color }) => {
//   const ref = useRef();

//   useFrame((state, delta, frame) => {
//     ref.current.rotation.y += delta * 0.2;
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <torusGeometry args={args} />
//       <meshStandardMaterial color={color} wireframe />
//     </mesh>
//   );
// };

// const TorusKnot = ({ position, args }) => {
//   const ref = useRef();

//   const { color, radius } = useControls({
//     color: "lightblue",
//     radius: {
//       value: 5,
//       min: 1,
//       max: 10,
//       step: 0.5,
//     },
//   });

//   useFrame((state, delta, frame) => {
//     // ref.current.rotation.y += delta * 0.2;
//   });

//   return (
//     <mesh position={position} ref={ref}>
//       <torusKnotGeometry args={[radius, ...args]} />
//       {/* <meshStandardMaterial color={color} /> */}
//       <MeshWobbleMaterial factor={3} color={color} />
//     </mesh>
//   );
// };

// const Sphere = ({ position, args, color }) => {
//   const ref = useRef();

//   const [isHovered, setIsHovered] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//   useFrame((state, delta, frame) => {
//     const speed = isHovered ? 1 : 0.2;
//     ref.current.rotation.y += delta * speed;
//     // ref.current.position.z = Math.sin(state.clock.elapsedTime * 4);
//   });

//   return (
//     <mesh
//       position={position}
//       ref={ref}
//       onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
//       onPointerLeave={() => setIsHovered(false)}
//       onClick={() => setIsClicked(!isClicked)}
//       scale={isClicked ? 1.5 : 1}
//     >
//       <sphereGeometry args={args} />
//       <meshStandardMaterial
//         color={isHovered ? "lightblue" : "orange"}
//         wireframe
//       />
//     </mesh>
//   );
// };

const Coin = ({ front, back, left, x, y, z }) => {
  const Cylinder = ({ position, args, color }) => {
    const ref = useRef();

    useFrame((state, delta, frame) => {
      ref.current.rotation.y += delta * y;
      ref.current.rotation.z += delta * z;
      ref.current.rotation.x += delta * x;
    });
    const textureLoader = new TextureLoader();
    const frontImage = textureLoader.load(front);
    return (
      <mesh ref={ref} position={position}>
        <cylinderGeometry args={args} setFromPoints={[0, 0, 0]} />
        <meshLambertMaterial map={frontImage} color={color} />
      </mesh>
    );
  };
  const Scene = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

    return (
      <>
        {/* <directionalLight position={[0, 1, 2]} ref={directionalLightRef} /> */}
        <ambientLight intensity={2} />
        <Cylinder args={[3, 3, 0.6, 23]} position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} />
      </>
    );
  };
  return (
    <div className="coin_container">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Coin;
