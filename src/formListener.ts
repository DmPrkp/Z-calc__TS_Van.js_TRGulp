export function innerDiv(arr: Array<any>, divEl: HTMLElement) {
	for (let i = 0; i < arr.length-2; i++) {
		if (arr[i] != "") {
			let div = document.createElement("div");
			if (i == 0) {
				div.innerText = `Фундамент:  ${arr[i]}`
			} else if (i == 1) {
				div.innerText = `Колонны:  ${arr[i]}`
			} else {
				div.innerText = `Покрытие:  ${arr[i]}`
			}
			divEl.appendChild(div)
		}
	}
}

export function innerDivLine(arr: Array<any>, divEl: HTMLElement, cnt: number) {
	for (let i = 0; i < arr.length; i++) {
		let div = document.createElement("div");
		if (i == 0) {
			let h4 = document.createElement("h4");
			h4.innerText = `Участок ${cnt}:`;
			divEl.appendChild(h4);
			div.innerText = `начало участка:  ${arr[i]}`
		} else if (i == 1) {
			div.innerText = `длинна участка:  ${arr[i]} м.`			
		} else if (i == 2) {
			div.innerText = `конец участка:  ${arr[i]}`			
		}
		divEl.appendChild(div);				
	}
}

export function calcPillarNum(arr: Array<any>) {
	let pillar : number = (Math.ceil(arr[1] / 3))-1;
	let calcPillar : number;
	if (arr[0] == "Край с опорой" && arr[2] == "Край с опорой") {
		return calcPillar = pillar+2
	} else if (arr[0] == "Угол поворота" && arr[2] == "Угол поворота") {
		return calcPillar = pillar+1
	} else if (arr[0] == "Край без опоры" && arr[2] == "Край без опоры") {
		return calcPillar = pillar
	} else if (arr[0] == "Край без опоры" || arr[2] == "Край без опоры") {
		calcPillar = pillar
	} else if (arr[0] == "Угол поворота" || arr[2] == "Угол поворота") {
		calcPillar = pillar + 0.5
	} else if (arr[0] == "Край с опорой" || arr[2] == "Край с опорой") {
		calcPillar = calcPillar + 1
	}	
	return calcPillar;

}

export function getSelected({ el1, el2, arr }: { el1: any; el2: any; arr: Array<any>; }) {
	for (let i = 0; i < el1.length; i++) {
		if (el1[i].selected) {
			arr.push(el1[i].value);
		}
	}

	let lineLength: any = document.querySelector("#inputMetr");
	let _lineLength: number = +lineLength.value;
	console.log(_lineLength);
	arr.push(_lineLength);

	for (let i = 0; i < el2.length; i++) {
		if (el2[i].selected) {
			arr.push(el2[i].value);
		}
	}	
}

