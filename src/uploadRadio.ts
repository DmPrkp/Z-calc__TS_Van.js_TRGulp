/*
export function uploadRadio(divCard: HTMLDivElement, arr: Array<any>, i: number) {
    let divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');

    let div = document.createElement('div');
    div.classList.add('custom-control', 'custom-radio');

    let input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", `cardRadio${i}-${arr[i].type}`);
    input.setAttribute("name", `${arr[i].type}`);
    //input.setAttribute("value", `${arr[i].name}`);
    let label = document.createElement('label');
    label.classList.add("form-check-label");
    //label.setAttribute("for", `cardRadio${i}-${arr[i].type}`);

    label.appendChild(input);
    div.appendChild(label);
    divFooter.appendChild(div);
    divCard.appendChild(divFooter);
}*/


export function uploadRadio(divCard: HTMLDivElement, arr: Array<any>, i: number) {
    let divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');
    let div = document.createElement('div');
    div.classList.add('custom-control', 'custom-radio');
    let input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", `cardRadio${i}-${arr[i].type}`);
    input.setAttribute("name", `${arr[i].type}`);
    input.setAttribute("value", `${arr[i].name}`);
    input.classList.add("custom-control-input");
    let label = document.createElement('label');
    label.classList.add("custom-control-label");
    label.setAttribute("for", `cardRadio${i}-${arr[i].type}`);
    div.appendChild(input);
    div.appendChild(label);
    divFooter.appendChild(div);
    divCard.appendChild(divFooter);
}
