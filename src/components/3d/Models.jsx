import React from 'react';
import { Float, Text3D, OrbitControls } from '@react-three/drei';

export const FloatingText = ({ text, size = 0.5, height = 0.2 }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={size}
                height={height}
                curveSegments={12}
            >
                {text}
                <meshStandardMaterial color="#3b82f6" wireframe />
            </Text3D>
        </Float>
    );
};

export const FloatingShape = ({ color = "#3b82f6" }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
};

export const FloatingCube = ({ color = "#3b82f6" }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
};

export const FloatingSphere = ({ color = "#3b82f6" }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
};

export const Scene = ({ children }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {children}
            <OrbitControls enableZoom={false} />
        </>
    );
}; 