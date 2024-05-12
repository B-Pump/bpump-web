import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Model } from "@/components/model/bpump";

export function BPump() {
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={false}
                autoRotate={true}
                autoRotateSpeed={2}
            />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    );
}
