import { useGLTF } from "@react-three/drei";

export function BPUMP() {
    const { nodes, materials } = useGLTF("3d/minibpump.gltf");

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.Icosphere.geometry}
                material={materials["Material.002"]}
                position={[0.172, 34.074, -2.886]}
                rotation={[0.144, 0, 0]}
                scale={1.143}
            />
            <mesh
                geometry={nodes.Sphere001.geometry}
                material={materials["Material.001"]}
                position={[0.079, 26.373, 0.326]}
                scale={[7.511, 7.511, 7.114]}
            />
            <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials["Material.003"]}
                position={[-5.176, 24.383, 4.695]}
                rotation={[1.497, 0.31, 0.535]}
                scale={0.564}
            />
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={materials["Material.004"]}
                position={[4.907, 24.255, 4.968]}
                rotation={[1.814, 0.208, -0.578]}
                scale={0.564}
            />
        </group>
    );
}
