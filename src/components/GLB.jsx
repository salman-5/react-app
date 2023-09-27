import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
function Models(props) {
  const { scene } = useGLTF("/couch.glb");
  return <primitive object={scene} {...props} />;
}

function ModelViewer() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "absolute" }}
    >
      <color attach="background" args={["#101010"]}></color>
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment="">
          <Models scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default ModelViewer;
