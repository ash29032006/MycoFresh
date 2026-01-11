import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial, SoftShadows } from '@react-three/drei'
import * as THREE from 'three'

// Procedural Mushroom Component
function Mushroom({ position, scale = 1, colorCap = "#F25C54", colorStem = "#F7E1D7", rotation = [0, 0, 0] }) {
    const group = useRef()

    // Wiggle animation
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        // Gentle floating rotation
        group.current.rotation.z = Math.sin(t * 0.5) * 0.05 + rotation[2]
        group.current.rotation.x = Math.cos(t * 0.3) * 0.05 + rotation[0]
    })

    return (
        <group ref={group} position={position} scale={scale} dispose={null}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                {/* Cap - Improved shape */}
                <mesh position={[0, 0.9, 0]}>
                    <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} /> {/* Perfect hemisphere */}
                    <MeshDistortMaterial
                        color={colorCap}
                        distort={0.12} // Reduced distortion
                        speed={1.2}
                        roughness={0.3} // Shinier
                        clearcoat={0.5}
                    />
                </mesh>

                {/* Gills (Underside) */}
                <mesh position={[0, 0.85, 0]} rotation={[Math.PI, 0, 0]}>
                    <circleGeometry args={[0.98, 32]} />
                    <meshStandardMaterial color="#E8DCCE" side={THREE.DoubleSide} roughness={0.9} />
                </mesh>

                {/* Stem - More prominent */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[0.25, 0.4, 1.6, 20]} />
                    <meshStandardMaterial color={colorStem} roughness={0.6} />
                </mesh>
            </Float>
        </group>
    )
}

function Spores({ count = 40 }) {
    const particles = useMemo(() => {
        return Array.from({ length: count }, () => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10
            ],
            scale: Math.random() * 0.05 + 0.01,
            speed: Math.random() * 0.2 + 0.1
        }))
    }, [count])

    return (
        <group>
            {particles.map((p, i) => (
                <Float key={i} speed={p.speed} rotationIntensity={0.5} floatIntensity={1} position={p.position}>
                    <mesh>
                        <sphereGeometry args={[p.scale, 8, 8]} />
                        <meshStandardMaterial
                            color="#FFF"
                            emissive="#FFF"
                            emissiveIntensity={0.5}
                            transparent
                            opacity={0.4}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    )
}

export function Scene() {
    return (
        <>
            <ambientLight intensity={0.7} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={1.2}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#407A68" />
            <Environment preset="forest" blur={1} />

            {/* Friendly Hero Mushroom */}
            <Mushroom
                position={[2.5, 0, 0]}
                scale={1.8}
                colorCap="#569C85" // Nature green cap
                colorStem="#F0EBE6" // Off-white stem
                rotation={[0, -0.2, 0.1]}
            />

            {/* Background Buddy Mushroom (Blurred/Small) */}
            <Mushroom
                position={[-3, -2, -4]}
                scale={1.2}
                colorCap="#D9C9B6" // Earthy beige cap
                colorStem="#F0EBE6"
                rotation={[0.2, 0.5, -0.1]}
            />

            {/* Tiny sprout */}
            <Mushroom
                position={[3.5, -3, -2]}
                scale={0.6}
                colorCap="#8EDEC6" // Light mint
                colorStem="#FFF"
            />

            <Spores />

            <fog attach="fog" args={['#F5FDFB', 8, 25]} />
        </>
    )
}
