export function plusUpload(divCard: HTMLDivElement, arr: Array<any>, i: number) {
    let div = document.createElement('div');
    let elP = document.createElement('p');
    let img = document.createElement('img');
    img.setAttribute("src", "./img/plus.png");
    img.style.width = "20px";
    img.style.height = "auto";
    div.appendChild(img);
    div.appendChild(elP);
    elP.innerText = (`${arr[i].plus}`);
    div.classList.add('card-text');
    divCard.appendChild(div);
}

export function minusUpload(divCard: HTMLDivElement, arr: Array<any>, i: number) {
    let div = document.createElement('div');
    let elP = document.createElement('p');
    let img = document.createElement('img');
    img.setAttribute("src", "./img/minus.png");
        img.style.width = "20px";
        img.style.height = "auto";
    div.appendChild(img);
    div.appendChild(elP);
    elP.innerText = (`${arr[i].minus}`);
        div.classList.add('card-text');
    divCard.appendChild(div);
}