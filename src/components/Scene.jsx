import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { Environment, ScrollControls } from "@react-three/drei"
function Scene() {
  return (
    <Canvas camara={{ fov: 65, position: [0, 0, 8.3] }}>
      <ScrollControls pages={6} damping={0.25}>
        <Model position={[0, 0, -1]} />
      </ScrollControls>
      <ambientLight intensity={1.6} />
      <Environment preset="sunset" />
    </Canvas>
  )
}

export default Scene
