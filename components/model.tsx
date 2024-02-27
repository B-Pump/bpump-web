import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { BPump } from "@/components/model/bpump";

export function Model() {
    return (
        <Canvas>
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <ambientLight intensity={0.8} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={3} />
            <Suspense fallback={null}>
                <BPump />
            </Suspense>
        </Canvas>
    );
}
