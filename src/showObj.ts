export function showObj(obj: any, mainDiv: HTMLElement) {
	let div1 = document.createElement('div');
	let div2 = document.createElement('div');
	div1.innerText = `Общее колличество столбов:  ${obj.allpillarNum}`;
	div2.innerText = `Общая длинна ограждения:  ${obj.fenceLength}`;
	mainDiv.appendChild(div1);
	mainDiv.appendChild(div2);
}

export function reinforcedBaseCulc (obj: any) {
    let finalObj : {
        concreteVolume? : number,
        reinforcement12? : number,
        reinforcement6? : number,
    } = {
        
    };
    let volumePillar : number = (obj.freezDepth * 0.16 * obj.allpillarNum);
    let lengthMinusPillar : number = obj.fenceLength - (obj.allpillarNum*0.4);   
    let volumeLine : number = lengthMinusPillar * 0.16;    
    let allConcreteVolume : number = +((volumeLine + volumePillar).toFixed(2));
    let reinforcement12 : number = +(((lengthMinusPillar + (obj.allpillarNum*obj.freezDepth))*4).toFixed(2));
    let reinforcement6 : number = +(((lengthMinusPillar + (obj.allpillarNum*obj.freezDepth))*1.56/0.3).toFixed(2));
    finalObj.concreteVolume = allConcreteVolume;
    finalObj.reinforcement12 = reinforcement12;
    finalObj.reinforcement6 = reinforcement6;    
    console.log (`
    необходимый объем бетона ${allConcreteVolume} м3
    количество арматуры ⌀12 ${reinforcement12}  м/п
    количество арматуры ⌀6 ${reinforcement6}  м/п`)
    return finalObj;
}