import { imgUpload } from './imgUpload';
import { headerUpload } from './headerUpload';
import { plusUpload, minusUpload } from './plusUpload';
import { uploadRadio } from './uploadRadio';

export class CardsConstructor {
    constructor(divId: string, bootstrapArr: Array<any>) {
        const elId = document.getElementById(divId);
        for (let i = 0; i < bootstrapArr.length; i++) {

            let divCol = document.createElement('div');
                divCol.classList.add("col-6", "my-1", "px-1", "col-lg-4");
            elId.appendChild(divCol);

            let divCard = document.createElement('div');
                divCard.classList.add("card", "border-warning", "h-100");
            divCol.appendChild(divCard);

            imgUpload(divCard, bootstrapArr, i);

            let divBody = document.createElement('div');
                divBody.classList.add('card-body');
            divCard.appendChild(divBody);

            headerUpload(divBody, bootstrapArr, i);
            //plusUpload(divBody, bootstrapArr, i);
            //minusUpload(divBody, bootstrapArr, i);
            uploadRadio(divCard, bootstrapArr, i);
        }
    }
}
