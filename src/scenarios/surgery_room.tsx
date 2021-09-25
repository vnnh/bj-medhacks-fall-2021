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
		Description: "patients on",
		Position: [0, 0, 0],
	},
	{
		Name: "Surgery Lamp",
		Path: `${pathPrefix}SurgeryLamp.fbx`,
		Description: "Surgery lamps help the operator to see by shining a light down onto the patient.",
		Position: [0, 3.5, 3],
		ScaleNumerator: 2.5,
	},
	{
		Name: "Syringe",
		Path: `${pathPrefix}Syringe.fbx`,
		Description: "Injection",
		Position: [-4.5, 4.45, 0],
		Rotation: [0, Math.PI / 5, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "Forceps",
		Path: `${pathPrefix}Forceps.fbx`,
		Description: "Snip",
		Position: [-4, 4.45, 0],
		Rotation: [Math.PI / 2, Math.PI / 5, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "NarrowForceps",
		Path: `${pathPrefix}NarrowForceps.fbx`,
		Description: "The narrow mouth of the forceps allows for greater mechnical efficiency.",
		Position: [-4.2, 4.45, 1.9],
		Rotation: [0, Math.PI / 2, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "CurvedForceps",
		Path: `${pathPrefix}CurvedForceps.fbx`,
		Description: "This type of forcep allows for more precision.",
		Position: [-4.5, 4.45, 1],
		Rotation: [0, Math.PI / 6, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "Microscope",
		Path: `${pathPrefix}Microscope.fbx`,
		Description: "Microscopes",
		Position: [-2.7, 4, 6],
		Rotation: [-Math.PI / 2, -Math.PI / 6, 0],
		ScaleNumerator: 1.5,
	},
	{
		Name: "Scalpel",
		Path: `${pathPrefix}Scalpel.fbx`,
		Description: "cut",
		Position: [-5, 3.3, 4],
		Rotation: [Math.PI / 2, 0, Math.PI / 2],
		ScaleNumerator: 1,
	},
	{
		Name: "Medicine",
		Path: `${pathPrefix}Medicine.fbx`,
		Description: "cut",
		Position: [-3.7, 3.3, 5.3],
		Rotation: [0, Math.PI / 5, 0],
		ScaleNumerator: 1,
	},
	{
		Name: "Oscilloscope",
		Path: `${pathPrefix}Oscilloscope.fbx`,
		Description: "cut",
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
		Description: "Used to quickly transport medical equipment.",
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
		Description: "IV Drip",
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
