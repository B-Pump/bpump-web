import { useGLTF } from "@react-three/drei";
import THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Icosphere: THREE.Mesh;
        Sphere001: THREE.Mesh;
        Cylinder001: THREE.Mesh;
        Cylinder002: THREE.Mesh;
    };
    materials: {
        ["Material.001"]: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        ["Material.003"]: THREE.MeshStandardMaterial;
        ["Material.004"]: THREE.MeshStandardMaterial;
    };
};

/*
    Auto-generated by : https://github.com/pmndrs/gltfjsx
    Command : pnpx gltfjsx minibpump.gltf --types 
*/

export function BPump() {
    const { nodes, materials } = useGLTF("/3d/minibpump.gltf") as GLTFResult;

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.Icosphere.geometry}
                material={materials["Material.002"]}
                position={[-0.078, 2.544, -0.381]}
                rotation={[0.144, 0, 0]}
                scale={0.14}
            />
            <mesh
                geometry={nodes.Sphere001.geometry}
                material={materials["Material.001"]}
                position={[-0.089, 1.6, 0.013]}
                scale={[0.92, 0.92, 0.872]}
            />
            <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials["Material.003"]}
                position={[-0.733, 1.356, 0.548]}
                rotation={[1.497, 0.31, 0.535]}
                scale={0.069}
            />
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={materials["Material.004"]}
                position={[0.502, 1.341, 0.582]}
                rotation={[1.814, 0.208, -0.578]}
                scale={0.069}
            />
        </group>
    );
}

useGLTF.preload("/3d/minibpump.gltf");
