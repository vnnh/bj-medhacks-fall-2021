import React from "react";
import { matchPath } from "react-router";
import { MeshBasicMaterial } from "three";

interface ObjectDescription {
	Name: string;
	Path: string;
	Description: string;
	Position: [number, number, number];
	Rotation?: [number, number, number];
	ScaleNumerator?: number;
	FBXModifier?: (fbx: THREE.Group) => void;
}

const pathPrefix = "scenarios/surgery_room/";
const surgeryScenarioDescription: ObjectDescription[] = [
	{
		Name: "Surgery Bed",
		Path: `${pathPrefix}SurgeryBed.fbx`,
		Description: "Specialized bed equipped to reposition the patient as needed.",
		Position: [0, 0, 0],
	},
	{
		Name: "Surgery Lamp",
		Path: `${pathPrefix}SurgeryLamp.fbx`,
		Description: "Surgery lamps help the operator see by shining a light down onto the patient.",
		Position: [0, 3.5, 3],
		ScaleNumerator: 2.5,
	},
	{
		Name: "Syringe",
		Path: `${pathPrefix}Syringe.fbx`,
		Description: "A reciprocating pump used to administer injections.",
		Position: [-4.5, 4.45, 0],
		Rotation: [0, Math.PI / 5, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "Forceps",
		Path: `${pathPrefix}Forceps.fbx`,
		Description: "A handheld instrument designed to grasp objects.",
		Position: [-4, 4.45, 0],
		Rotation: [Math.PI / 2, Math.PI / 5, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "NarrowForceps",
		Path: `${pathPrefix}NarrowForceps.fbx`,
		Description: "Slimmed-down forceps utilized for grabbing smaller objects.",
		Position: [-4.2, 4.45, 1.9],
		Rotation: [0, Math.PI / 2, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "CurvedForceps",
		Path: `${pathPrefix}CurvedForceps.fbx`,
		Description: "Forceps designed for clamping and holding down blood vessels.",
		Position: [-4.5, 4.45, 1],
		Rotation: [0, Math.PI / 6, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "Microscope",
		Path: `${pathPrefix}Microscope.fbx`,
		Description: "Optical instrument that provides the surgeon with much greater visual magnification.",
		Position: [-2.7, 4, 6],
		Rotation: [-Math.PI / 2, -Math.PI / 6, 0],
		ScaleNumerator: 1.5,
	},
	{
		Name: "Scalpel",
		Path: `${pathPrefix}Scalpel.fbx`,
		Description: "A sharp instrument used for making incisions.",
		Position: [-5, 3.3, 4],
		Rotation: [Math.PI / 2, 0, Math.PI / 2],
		ScaleNumerator: 1,
	},
	{
		Name: "Medicine",
		Path: `${pathPrefix}Medicine.fbx`,
		Description: "Various medications with different effects.",
		Position: [-3.7, 3.3, 5.3],
		Rotation: [0, Math.PI / 5, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "Oscilloscope",
		Path: `${pathPrefix}Oscilloscope.fbx`,
		Description: "A tool that measures varying voltage and is utilized to measure body electricity.",
		Position: [-1, 3.3, 7],
		Rotation: [-Math.PI / 2, -Math.PI / 2, 0],
		ScaleNumerator: 3,
		FBXModifier: (fbx) => {
			const material = new MeshBasicMaterial({ color: "#FFD700" });
			fbx.children.forEach((mesh) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				mesh.material = material;
			});
		},
	},
	{
		Name: "Notepad",
		Path: `${pathPrefix}Notepad.fbx`,
		Description: "Even doctors are human! They cannot remember everything!",
		Position: [-4.15, 4.3, -1],
		Rotation: [0, Math.PI / 2, 0],
		ScaleNumerator: 1.2,
		FBXModifier: (fbx) => {
			const material = new MeshBasicMaterial({ color: "#FFD700" });
			fbx.children.forEach((mesh) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				mesh.material = material;
			});
		},
	},
	{
		Name: "Medical Trolley",
		Path: `${pathPrefix}MedicalTrolley.fbx`,
		Description: "A cart used to carry and transport medical equipment.",
		Position: [-4.2, 1.3, -0.2],
		Rotation: [0, Math.PI / 2, 0],
		ScaleNumerator: 5,
	},
	{
		Name: "Table",
		Path: `${pathPrefix}ReceptionTable.fbx`,
		Description: "",
		Position: [-3, 0, 5],
		Rotation: [0, Math.PI, 0],
		ScaleNumerator: 9,
	},
	{
		Name: "IV Drip",
		Path: `${pathPrefix}IVDrip.fbx`,
		Description: "A bag containing essential fluids that introduces the fluids through the bloodstream via a catheter.",
		Position: [3.5, 0.1, 4],
		Rotation: [-Math.PI / 2, Math.PI / 2, 0],
		ScaleNumerator: 5,
		FBXModifier: (fbx) => {
			const material = new MeshBasicMaterial({ color: "#FFFFFF" });
			fbx.children.forEach((mesh) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				mesh.material = material;
			});
		},
	},
];

export default surgeryScenarioDescription;
