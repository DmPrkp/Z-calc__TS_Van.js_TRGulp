import { basementObj, pillarsObj, coverObj } from './bootstrapData';
import { CardsConstructor } from './CardsConstructor';
import { innerDiv, innerDivLine, calcPillarNum, getSelected } from './formListener';
import { showObj, reinforcedBaseCulc } from './showObj';

const arrForm: Array<any> = [];
const allLine: Array<any> = [];
const objLine : {
	type: Array<any>,
	allpillarNum: number,
	fenceLength: number,
	arrLine: Array<any>,
	freezDepth: number,
	hight: number,	
} = {
	type: arrForm,
	fenceLength: 0,
	allpillarNum: 0,
	arrLine: allLine,
	freezDepth: 1,
	hight: 2,	
}



const form: HTMLFormElement = document.forms[<any>'fenceForm'];
const constrDiv: HTMLElement = document.getElementById("fenceDiv");
const outputDiv: HTMLElement = document.getElementById("constructOutput");
const addBtn: HTMLElement = document.getElementById("addBtn");
const block2: HTMLElement = document.querySelector("#block2");
const hr :HTMLElement = document.createElement('hr');
const btnCompute : HTMLElement = document.querySelector('#btnCompute')
const finalCalcDiv : HTMLElement = document.querySelector("#finalCalcDiv")
const сalcContentDiv : HTMLElement = document.querySelector("#сalcContent")
let cnt = 0;

new CardsConstructor("basementArr", basementObj);
new CardsConstructor("pillarsArr", pillarsObj);
new CardsConstructor("coveringArr", coverObj);

//Кнопка далее на превой странице
form.addEventListener('submit', (e: any) => {
	e.preventDefault();
	if (document.querySelector(<any>"input[name='basement']:checked") != null) {
		var answerBasement: string = document.querySelector(<any>"input[name='basement']:checked").value;
	} else { answerBasement = "" }
	if (document.querySelector(<any>"input[name='pillars']:checked") != null) {
		var answerPillar: string = document.querySelector(<any>"input[name='pillars']:checked").value;
	} else { answerPillar = "" }
	if (document.querySelector(<any>"input[name='cover']:checked") != null) {
		var answerCover: string = document.querySelector(<any>"input[name='cover']:checked").value;
	} else { answerCover = "" }

	arrForm.push(answerBasement, answerPillar, answerCover);

	constrDiv.setAttribute("style", "display: none;");
	block2.classList.remove("d-none");

	innerDiv(arrForm, outputDiv);
	outputDiv.append(hr)
});

//Кнопка добавить участок 
addBtn.addEventListener('click', (e: any) => {
	e.preventDefault();
	let arrLine: Array<any> = [];
	let lineForm: HTMLElement = document.getElementById("lineForm");
	let newForm = lineForm.cloneNode(true);
	let startPoint: HTMLElement = document.querySelector("#firstPoints");
	let lastPoint: HTMLElement = document.querySelector("#secondPoints");	
	let hr :HTMLElement = document.createElement('hr');

	getSelected({ el1: startPoint, el2: lastPoint, arr: arrLine });

	let pillarNum : number = calcPillarNum(arrLine);	
	allLine.push(arrLine);		
	objLine.allpillarNum = objLine.allpillarNum + pillarNum;
	objLine.fenceLength =objLine.fenceLength + arrLine[1];

	upCnt();
	innerDivLine(arrLine, outputDiv, cnt);
	outputDiv.append(hr);
	lineForm.remove();

	console.log(objLine);	
	addBtn.after(newForm);	
})
function upCnt() {cnt++;}

//Кнопка расчитать на второй странице
btnCompute.addEventListener("click", (e)=>{
	e.preventDefault();
	block2.classList.add("d-none");
	finalCalcDiv.classList.remove("d-none");

	innerDiv(arrForm, сalcContentDiv);
	showObj(objLine, сalcContentDiv);
	сalcContentDiv.append(hr);

	reinforcedBaseCulc(objLine);
});