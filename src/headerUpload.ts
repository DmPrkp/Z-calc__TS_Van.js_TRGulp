export function headerUpload(div: HTMLDivElement, arr: Array<any>, i: number) {
    let elH6 = document.createElement('p');
    elH6.innerText = (`${arr[i].name}`);
    elH6.classList.add('card-title');
    div.appendChild(elH6);
}
