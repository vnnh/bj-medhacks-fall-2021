import { Loader, useFBX } from "@react-three/drei";
import { Canvas, extend, useThree } from "@react-three/fiber";
import React, { Suspense, useContext } from "react";
import * as THREE from "three";
import { MeshPhongMaterial, Vector3 } from "three";
import { Lightmap } from "src/three/Lightmap";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { FlyControls } from "src/three/controls/FlyControls";
import surgeryScenarioDescription from "src/scenarios/surgery_room";
import { CurrentContext } from "src/context/current";

extend({ DragControls });

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace JSX {
		interface IntrinsicElements {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			dragControls: any;
		}
	}
}

const gridMaterial = new MeshPhongMaterial({ opacity: 0.2, transparent: true });
const BaseScene: React.FunctionComponent = () => {
	return (
		<>
			<mesh
				scale={1000}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, 0, 0]}
				castShadow={true}
				receiveShadow={true}
				frustumCulled={false}
			>
				<planeGeometry />
				<meshPhongMaterial args={[{ color: "#c0c0c0" }]} />
			</mesh>
			<gridHelper args={[1000, 20, 0x000000, 0x000000]} material={gridMaterial} />
		</>
	);
};

const FBXScene: React.FunctionComponent<{ setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }> = (
	props,
) => {
	//const camera = useThree((state) => state.camera);
	//const gl = useThree((state) => state.gl);

	let fbxChildren: JSX.Element[] = [];
	for (const description of surgeryScenarioDescription) {
		const fbx = useFBX(description.Path);

		fbx.position.set(...description.Position);
		fbx.rotation.set(0, 0, 0);

		let box3 = new THREE.Box3().setFromObject(fbx);
		const size = new THREE.Vector3();
		box3.getSize(size);

		fbx.scale.multiplyScalar((description.ScaleNumerator ?? 10) / Math.max(size.x, size.y, size.z));
		box3 = new THREE.Box3().setFromObject(fbx);
		box3.getSize(size);

		if (description.Rotation !== undefined) {
			fbx.rotation.set(description.Rotation[0], description.Rotation[1], description.Rotation[2], "ZYX");
		}

		if (description.FBXModifier) {
			description.FBXModifier(fbx);
		}

		fbxChildren.push(
			<mesh
				key={`${description.Name}-${surgeryScenarioDescription.indexOf(description)}`}
				onPointerOver={() => {
					props.setCurrentIndex(surgeryScenarioDescription.indexOf(description));
				}}
				onPointerOut={() => {
					props.setCurrentIndex(-1);
				}}
			>
				<primitive object={fbx} />
			</mesh>,
		);
	}

	//<dragControls enabled transformGroup args={[[fbx], camera, gl.domElement]} />
	return <group>{fbxChildren}</group>;
};

const Scene: React.FunctionComponent<{ setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }> = (props) => {
	return (
		<Lightmap>
			<FBXScene setCurrentIndex={props.setCurrentIndex} />
			<BaseScene />
		</Lightmap>
	);
};

class CanvasView extends React.PureComponent<{ setCurrentIndex: React.Dispatch<React.SetStateAction<number>> }> {
	render() {
		return (
			<>
				<Canvas
					frameloop={"always"}
					camera={{ position: new Vector3(0, 2, 10) }}
					shadows
					dpr={[1, 1.5]}
					gl={{ alpha: false }}
				>
					<color attach={`background`} args={["#d0d0d0"]}></color>
					<fog attach="fog" args={["#d0d0d0", 100, 600]} />
					<FlyControls movementSpeed={5} rotateSpeed={Math.PI / 8} autoForward={false} dragToLook={true} />
					<Suspense fallback={null}>
						<Scene setCurrentIndex={this.props.setCurrentIndex} />
					</Suspense>
				</Canvas>
				<Loader />
			</>
		);
	}
}

export default CanvasView;
