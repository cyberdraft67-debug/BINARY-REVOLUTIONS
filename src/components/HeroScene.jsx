import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function ParticleField() {
  const groupRef = useRef(null)
  const count = 900

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.02
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.2
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#8fc4ff"
          transparent
          opacity={0.65}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ pointerEvents: 'none' }}
    >
      <ParticleField />
    </Canvas>
  )
}
