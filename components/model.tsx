import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { BPump } from "@/components/model/b-pump";

export function Model() {
    return (
        <Canvas>
            <ambientLight intensity={2.5} />
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate={true}
                autoRotateSpeed={3}
                minPolarAngle={1}
                maxPolarAngle={2}
            />
            <Suspense fallback={null}>
                <BPump />
            </Suspense>
        </Canvas>
    );
}
