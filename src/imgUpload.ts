export function imgUpload(divCard: HTMLDivElement, arr: Array<any>, i: number) {
    let divImg = document.createElement('div');
    divImg.style.maxHeight = "500px";    
    divCard.appendChild(divImg);
    let img = document.createElement('img');
    img.setAttribute("src", "./" + arr[i].img);
    img.classList.add('card-img-top');
    img.style.width = "100%";
    img.style.height = "auto";
    divImg.appendChild(img);
}
