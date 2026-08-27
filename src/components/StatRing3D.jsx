import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, animate } from 'framer-motion'
import * as THREE from 'three'

function RingMesh({ percentage, active, delay }) {
  const groupRef = useRef(null)
  const fillRef = useRef(null)
  const progressRef = useRef(0)

  useEffect(() => {
    if (!active) return
    const controls = animate(0, percentage, {
      duration: 1.4,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => {
        progressRef.current = v
      },
    })
    return () => controls.stop()
  }, [active, percentage, delay])

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.5

    const mesh = fillRef.current
    if (!mesh) return
    const arc = Math.max(0.001, (progressRef.current / 100) * Math.PI * 2)
    if (Math.abs((mesh.geometry.parameters?.arc ?? 0) - arc) > 0.002) {
      mesh.geometry.dispose()
      mesh.geometry = new THREE.TorusGeometry(1, 0.16, 16, 64, arc)
    }
  })

  return (
    <group rotation={[0.6, 0, Math.PI / 2]}>
      <group ref={groupRef}>
        <mesh>
          <torusGeometry args={[1, 0.16, 16, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
        </mesh>
        <mesh ref={fillRef}>
          <torusGeometry args={[1, 0.16, 16, 64, 0.001]} />
          <meshBasicMaterial color="#1b8ef5" />
        </mesh>
      </group>
    </group>
  )
}

export default function StatRing3D({ percentage, label, delay = 0 }) {
  const [active, setActive] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    const controls = animate(0, percentage, {
      duration: 1.4,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [active, percentage, delay])

  return (
    <motion.div
      className="flex flex-col items-center"
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="relative h-[110px] w-[110px]">
        <Canvas
          dpr={[1, 1.5]}
          orthographic
          camera={{ zoom: 42, position: [0, 0, 10] }}
          gl={{ alpha: true }}
          style={{ pointerEvents: 'none' }}
        >
          <RingMesh percentage={percentage} active={active} delay={delay} />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
          {display}%
        </div>
      </div>
      <span className="mt-4 text-center text-sm font-medium text-gray-300">{label}</span>
    </motion.div>
  )
}
