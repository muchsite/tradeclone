import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Coin2 = () => {
  const containerRef = useRef();

  useEffect(() => {
    const init = () => {
      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Cube Geometry
      //   const cubeGeometry = new THREE.BoxGeometry();
      //   const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      //   const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      //   scene.add(cube);
      const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const cylinder = new THREE.Mesh(geometry, material);
      scene.add(cylinder);
      // Directional Light
      const light = new THREE.DirectionalLight(0xffffff, 1);
      scene.add(light);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      // Start animation
      animate();
    };
    init();
  }, []);

  return <div ref={containerRef} />;
};

export default Coin2;
