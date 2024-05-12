/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 bpump.glb --types 
*/

import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        backpack: THREE.Mesh;
        body: THREE.Mesh;
        cap: THREE.Mesh;
        head: THREE.Mesh;
        mouth: THREE.Mesh;
        pant001: THREE.Mesh;
        arms001: THREE.Mesh;
        legs001: THREE.Mesh;
        legs002: THREE.Mesh;
        legs003: THREE.Mesh;
        legs004: THREE.Mesh;
    };
    materials: {
        ["Material.010"]: THREE.MeshStandardMaterial;
        ["Material.001"]: THREE.MeshStandardMaterial;
        ["Material.005"]: THREE.MeshStandardMaterial;
        ["Material.008"]: THREE.MeshStandardMaterial;
        ["Material.009"]: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        ["Material.007"]: THREE.MeshStandardMaterial;
        ["Material.006"]: THREE.MeshStandardMaterial;
        ["Material.004"]: THREE.MeshStandardMaterial;
        ["Material.003"]: THREE.MeshStandardMaterial;
    };
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>>;

export function Model(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/3d/bpump.glb") as GLTFResult;

    return (
        <group {...props} dispose={null} scale={0.1}>
            <mesh
                geometry={nodes.backpack.geometry}
                material={materials["Material.010"]}
                position={[0, -7.792, -4.37]}
                scale={[0.786, 1, 1]}
            />
            <mesh geometry={nodes.body.geometry} material={materials["Material.001"]} position={[-0.017, -11.055, -0.11]} />
            <mesh
                geometry={nodes.cap.geometry}
                material={materials["Material.005"]}
                position={[0, 9.501, 0.094]}
                rotation={[-0.299, 0, 0]}
                scale={1.048}
            />
            <mesh geometry={nodes.head.geometry} material={materials["Material.008"]} position={[0, 9.501, 0.094]} />
            <mesh
                geometry={nodes.mouth.geometry}
                material={materials["Material.009"]}
                position={[0, -1.07, 8.812]}
                rotation={[0.873, 0, 0]}
                scale={[1.627, 1, 1]}
            />
            <mesh
                geometry={nodes.pant001.geometry}
                material={materials["Material.002"]}
                position={[0, -14.931, 0]}
                scale={[0.987, 1, 0.675]}
            />
            <mesh
                geometry={nodes.arms001.geometry}
                material={materials["Material.007"]}
                position={[-0.017, -4.164, 0.318]}
                rotation={[-0.094, 0, 0]}
            />
            <mesh
                geometry={nodes.legs001.geometry}
                material={materials["Material.006"]}
                position={[0.004, -25.325, -0.016]}
                scale={[1, 0.135, 1]}
            />
            <mesh
                geometry={nodes.legs002.geometry}
                material={materials["Material.004"]}
                position={[0.004, -25.325, -0.016]}
                scale={[1, 0.135, 1]}
            />
            <mesh
                geometry={nodes.legs003.geometry}
                material={materials["Material.003"]}
                position={[0.004, -25.325, -0.016]}
                scale={[1, 0.135, 1]}
            />
            <mesh
                geometry={nodes.legs004.geometry}
                material={nodes.legs004.material}
                position={[0.004, -25.325, -0.016]}
                scale={[1, 0.135, 1]}
            />
        </group>
    );
}

useGLTF.preload("/3d/bpump.glb");
