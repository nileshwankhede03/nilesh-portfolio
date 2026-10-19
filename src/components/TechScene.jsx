import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TechScene() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
    } catch {
      host.classList.add('scene-unavailable')
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
    renderer.setSize(host.clientWidth, host.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, host.clientWidth / host.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 8.6)

    scene.add(new THREE.AmbientLight(0xb7ffd0, 1.15))
    const keyLight = new THREE.PointLight(0x8cffb6, 18, 18)
    keyLight.position.set(3.2, 2.8, 4)
    scene.add(keyLight)
    const blueLight = new THREE.PointLight(0x55c6ff, 12, 15)
    blueLight.position.set(-3.5, -1.4, 2)
    scene.add(blueLight)

    const core = new THREE.Group()
    scene.add(core)

    const coreGeometry = new THREE.IcosahedronGeometry(1.28, 1)
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8fffc0,
      metalness: 0.5,
      roughness: 0.23,
      transparent: true,
      opacity: 0.78,
      emissive: 0x0b4026,
      emissiveIntensity: 0.7,
      flatShading: true,
    })
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    core.add(coreMesh)

    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.34, 1)),
      new THREE.LineBasicMaterial({ color: 0xb6ffd0, transparent: true, opacity: 0.68 }),
    )
    core.add(wire)

    const innerGeometry = new THREE.IcosahedronGeometry(0.83, 1)
    const innerWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(innerGeometry),
      new THREE.LineBasicMaterial({ color: 0x5ad6ff, transparent: true, opacity: 0.68 }),
    )
    core.add(innerWire)

    const ringMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x87ffc0, transparent: true, opacity: 0.55, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x5acbff, transparent: true, opacity: 0.45, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xc4ffe0, transparent: true, opacity: 0.27, wireframe: true }),
    ]
    const rings = [
      new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.008, 8, 150), ringMaterials[0]),
      new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.006, 8, 150), ringMaterials[1]),
      new THREE.Mesh(new THREE.TorusGeometry(2.52, 0.004, 8, 150), ringMaterials[2]),
    ]
    rings[0].rotation.set(1.02, 0.28, 0.2)
    rings[1].rotation.set(0.22, 1.03, -0.45)
    rings[2].rotation.set(1.42, -0.55, 0.65)
    rings.forEach((ring) => scene.add(ring))

    const nodeGroup = new THREE.Group()
    core.add(nodeGroup)
    const nodePositions = [
      [1.52, 0.3, 0.15], [-1.4, 0.62, 0.4], [0.2, 1.58, -0.1],
      [-0.35, -1.51, 0.35], [1.22, -0.92, -0.2], [-1.2, -0.65, 0.3],
      [0.55, 0.2, 1.18], [-0.52, 0.24, -1.15],
    ]
    const nodeGeometry = new THREE.SphereGeometry(0.055, 12, 12)
    nodePositions.forEach((position, index) => {
      const material = new THREE.MeshBasicMaterial({ color: index % 2 ? 0x62caff : 0xc8ffdc })
      const node = new THREE.Mesh(nodeGeometry, material)
      node.position.set(...position)
      nodeGroup.add(node)
    })

    const particleCount = 260
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.7 + Math.random() * 2.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x9fffc9, size: 0.018, transparent: true, opacity: 0.7, sizeAttenuation: true }),
    )
    scene.add(particles)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let rafId = 0
    let pointerX = 0
    let pointerY = 0
    let targetX = 0
    let targetY = 0
    const onPointerMove = (event) => {
      const rect = host.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.55
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.36
    }
    host.addEventListener('pointermove', onPointerMove, { passive: true })

    const clock = new THREE.Clock()
    const render = () => {
      rafId = window.requestAnimationFrame(render)
      const time = clock.getElapsedTime()
      targetX += (pointerY - targetX) * 0.035
      targetY += (pointerX - targetY) * 0.035
      if (!reducedMotion) {
        core.rotation.y = time * 0.16 + targetY
        core.rotation.x = Math.sin(time * 0.32) * 0.11 + targetX
        rings[0].rotation.z += 0.0009
        rings[1].rotation.x -= 0.0006
        rings[2].rotation.y += 0.00055
        particles.rotation.y = time * 0.012
      } else {
        core.rotation.x = targetX
        core.rotation.y = targetY
      }
      renderer.render(scene, camera)
    }
    render()

    const resizeObserver = new ResizeObserver(() => {
      if (!host.clientWidth || !host.clientHeight) return
      camera.aspect = host.clientWidth / host.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(host.clientWidth, host.clientHeight)
    })
    resizeObserver.observe(host)

    return () => {
      window.cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      host.removeEventListener('pointermove', onPointerMove)
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div className="tech-scene" ref={hostRef} aria-hidden="true" />
}
