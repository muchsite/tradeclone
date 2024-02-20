import { Canvas, useFrame } from "@react-three/fiber";
import "./coin.scss";
import { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper, TextureLoader } from "three";

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
        <ambientLight intensity={3} />
        <Cylinder args={[2.2, 2.2, 0.4, 230]} position={[0, 0, 0]} />
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
