import { basementObj, pillarsObj, coverObj } from './bootstrapData';
import { CardsConstructor } from './CardsConstructor';
import { innerDiv, innerDivLine, calcPillarNum, getSelected } from './formListener';

var arrForm: Array<any> = [];
let objLine : {
	type: Array<string>,
	[key: number]: Array<any>,	
} = {
	type: arrForm,	
}



const form: HTMLFormElement = document.forms[<any>'fenceForm'];
const constrDiv: HTMLElement = document.getElementById("fenceDiv");
const outputDiv: HTMLElement = document.getElementById("constructOutput");
const addBtn: HTMLElement = document.getElementById("addBtn");
const block2: HTMLElement = document.querySelector("#block2");
const hr :HTMLElement = document.createElement('hr');
const btnCompute : HTMLElement = document.querySelector('#btnCompute')
let cnt = 0;



new CardsConstructor("basementArr", basementObj);
new CardsConstructor("pillarsArr", pillarsObj);
new CardsConstructor("coveringArr", coverObj);



addBtn.addEventListener('click', (e: any) => {
	e.preventDefault();
	let arrLine: Array<any> = [];
	let lineForm: HTMLElement = document.getElementById("lineForm");
	let newForm = lineForm.cloneNode(true);
	let startPoint: HTMLElement = document.querySelector("#firstPoints1");
	let lastPoint: HTMLElement = document.querySelector("#firstPoints2");	
	let hr :HTMLElement = document.createElement('hr');

	getSelected({ el1: startPoint, el2: lastPoint, arr: arrLine });

	let pillarNum = calcPillarNum(arrLine);
	arrLine.push(pillarNum);

	upCnt();
	innerDivLine(arrLine, outputDiv, cnt);
	outputDiv.append(hr);
	lineForm.remove();

	objLine[cnt] = arrLine;
	console.log(objLine);	
	addBtn.after(newForm);	
})



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

	arrForm.push(answerBasement, answerPillar, answerCover, 1, 2);

	constrDiv.setAttribute("style", "display: none;");
	block2.classList.remove("d-none");

	innerDiv(arrForm, outputDiv);
	outputDiv.append(hr)
});

function upCnt() {cnt++;}

btnCompute.addEventListener("click", (e)=>{
	e.preventDefault();
	block2.classList.add("d-none")
	lengthCompute(objLine)
})


function lengthCompute (objFence: object) {	

	console.log()
	/*for (let i = 0; i < objFence.length; i++) {
		if (el1[i].selected) {
			arr.push(el1[i].value);
		}*/
}