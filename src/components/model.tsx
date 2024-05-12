import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Model } from "@/components/model/bpump";

export function BPump() {
    return (
        <Canvas>
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
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
