(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsConstructor = void 0;
var imgUpload_1 = require("./imgUpload");
var headerUpload_1 = require("./headerUpload");
var uploadRadio_1 = require("./uploadRadio");
var CardsConstructor = /** @class */ (function () {
    function CardsConstructor(divId, bootstrapArr) {
        var elId = document.getElementById(divId);
        for (var i = 0; i < bootstrapArr.length; i++) {
            var divCol = document.createElement('div');
            divCol.classList.add("col-6", "my-1", "px-1", "col-lg-4");
            elId.appendChild(divCol);
            var divCard = document.createElement('div');
            divCard.classList.add("card", "border-warning", "h-100");
            divCol.appendChild(divCard);
            imgUpload_1.imgUpload(divCard, bootstrapArr, i);
            var divBody = document.createElement('div');
            divBody.classList.add('card-body');
            divCard.appendChild(divBody);
            headerUpload_1.headerUpload(divBody, bootstrapArr, i);
            //plusUpload(divBody, bootstrapArr, i);
            //minusUpload(divBody, bootstrapArr, i);
            uploadRadio_1.uploadRadio(divCard, bootstrapArr, i);
        }
    }
    return CardsConstructor;
}());
exports.CardsConstructor = CardsConstructor;
},{"./headerUpload":4,"./imgUpload":5,"./uploadRadio":7}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coverObj = exports.pillarsObj = exports.basementObj = void 0;
exports.basementObj = [
    {
        id: 1.1,
        img: "img/basement/RFL.png",
        name: "Железобетонный ленточный фундамент",
        plus: ["Несущая способность", "долговечность"],
        minus: ["Стоймость"],
        type: "basement",
    },
    {
        id: 1.2,
        img: "img/basement/RF.png",
        name: "Железобетонный фундамент",
        plus: ["Долговечность"],
        minus: ["Cущественных нет"],
        type: "basement",
    },
    {
        id: 1.3,
        img: "img/basement/Pillar.png",
        name: "\u041A\u043E\u043B\u043E\u043D\u043D\u044B \u0432 \u0433\u0440\u0443\u043D\u0442\u0435\n        (\u0431\u0435\u0437 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430)",
        plus: ["Стоимость"],
        minus: ["Недолговечность(10-20 лет)"],
        type: "basement",
    },
];
exports.pillarsObj = [
    {
        id: 2.1,
        img: "img/pillars/BP.png",
        name: "Армированная кладка",
        plus: ["Несущая способность", "долговечность"],
        minus: ["Стоймость"],
        type: "pillars",
    },
    {
        id: 2.2,
        img: "img/pillars/MP.png",
        name: "Металлопрокат",
        plus: ["Долговечность"],
        minus: ["Cущественных нет"],
        type: "pillars",
    },
    {
        id: 2.3,
        img: "img/pillars/WP.png",
        name: "Пиломатериалы",
        plus: ["Стоимость"],
        minus: ["Недолговечность (10-20 лет)"],
        type: "pillars",
    },
];
exports.coverObj = [
    {
        id: 3.1,
        img: "img/cover/Brick.jpg",
        name: "Кирпич",
        plus: ["Несущая способность", "долговечность"],
        minus: ["Стоймость"],
        type: "cover",
    },
    {
        id: 3.2,
        img: "img/cover/Proflist.jpg",
        name: "Профлист",
        plus: ["Долговечность"],
        minus: ["Cущественных нет"],
        type: "cover",
    },
    {
        id: 3.3,
        img: "img/cover/wood.jpg",
        name: "Доска",
        plus: ["Стоимость"],
        minus: ["\u041D\u0435\u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u043D\u043E\u0441\u0442\u044C (10-20 \u043B\u0435\u0442)"],
        type: "cover",
    },
    {
        id: 3.4,
        img: "img/cover/SetkaR.jpg",
        name: "Сетка рабица",
        plus: ["Стоимость"],
        minus: ["Недолговечность(10-20 лет)"],
        type: "cover",
    },
    {
        id: 3.5,
        img: "img/cover/Shtaket.jpg",
        name: "Штакет",
        plus: ["Стоимость"],
        minus: ["Недолговечность(10-20 лет)"],
        type: "cover",
    },
    {
        id: 3.6,
        img: "img/cover/Gitter.jpg",
        name: "ЗD сетка",
        plus: ["Стоимость"],
        minus: ["Недолговечность(10-20 лет)"],
        type: "cover",
    },
];
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelected = exports.calcPillarNum = exports.innerDivLine = exports.innerDiv = void 0;
function innerDiv(arr, divEl) {
    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] != "") {
            var div = document.createElement("div");
            if (i == 0) {
                div.innerText = "\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442:  " + arr[i];
            }
            else if (i == 1) {
                div.innerText = "\u041A\u043E\u043B\u043E\u043D\u043D\u044B:  " + arr[i];
            }
            else {
                div.innerText = "\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435:  " + arr[i];
            }
            divEl.appendChild(div);
        }
    }
}
exports.innerDiv = innerDiv;
function innerDivLine(arr, divEl, cnt) {
    for (var i = 0; i < arr.length; i++) {
        var div = document.createElement("div");
        if (i == 0) {
            var h4 = document.createElement("h4");
            h4.innerText = "\u0423\u0447\u0430\u0441\u0442\u043E\u043A " + cnt + ":";
            divEl.appendChild(h4);
            div.innerText = "\u043D\u0430\u0447\u0430\u043B\u043E \u0443\u0447\u0430\u0441\u0442\u043A\u0430:  " + arr[i];
        }
        else if (i == 1) {
            div.innerText = "\u0434\u043B\u0438\u043D\u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043A\u0430:  " + arr[i] + " \u043C.";
        }
        else if (i == 2) {
            div.innerText = "\u043A\u043E\u043D\u0435\u0446 \u0443\u0447\u0430\u0441\u0442\u043A\u0430:  " + arr[i];
        }
        else {
            div.innerText = "\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u043E\u043B\u0431\u043E\u0432: " + arr[i];
        }
        divEl.appendChild(div);
    }
}
exports.innerDivLine = innerDivLine;
function calcPillarNum(arr) {
    var pillar = (Math.ceil(arr[1] / 3)) - 1;
    var calcPillar;
    if (arr[0] == "Край с опорой" && arr[2] == "Край с опорой") {
        return calcPillar = pillar + 2;
    }
    else if (arr[0] == "Угол поворота" && arr[2] == "Угол поворота") {
        return calcPillar = pillar + 1;
    }
    else if (arr[0] == "Край без опоры" && arr[2] == "Край без опоры") {
        return calcPillar = pillar;
    }
    else if (arr[0] == "Край без опоры" || arr[2] == "Край без опоры") {
        calcPillar = pillar;
    }
    else if (arr[0] == "Угол поворота" || arr[2] == "Угол поворота") {
        calcPillar = pillar + 0.5;
    }
    else if (arr[0] == "Край с опорой" || arr[2] == "Край с опорой") {
        calcPillar = calcPillar + 1;
    }
    return calcPillar;
}
exports.calcPillarNum = calcPillarNum;
function getSelected(_a) {
    var el1 = _a.el1, el2 = _a.el2, arr = _a.arr;
    for (var i = 0; i < el1.length; i++) {
        if (el1[i].selected) {
            arr.push(el1[i].value);
        }
    }
    var lineLength = document.querySelector("#inputMetr");
    var _lineLength = lineLength.value;
    arr.push(_lineLength);
    for (var i = 0; i < el2.length; i++) {
        if (el2[i].selected) {
            arr.push(el2[i].value);
        }
    }
    console.log(arr);
}
exports.getSelected = getSelected;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerUpload = void 0;
function headerUpload(div, arr, i) {
    var elH6 = document.createElement('p');
    elH6.innerText = ("" + arr[i].name);
    elH6.classList.add('card-title');
    div.appendChild(elH6);
}
exports.headerUpload = headerUpload;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgUpload = void 0;
function imgUpload(divCard, arr, i) {
    var divImg = document.createElement('div');
    divImg.style.maxHeight = "500px";
    divCard.appendChild(divImg);
    var img = document.createElement('img');
    img.setAttribute("src", "./" + arr[i].img);
    img.classList.add('card-img-top');
    img.style.width = "100%";
    img.style.height = "auto";
    divImg.appendChild(img);
}
exports.imgUpload = imgUpload;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bootstrapData_1 = require("./bootstrapData");
var CardsConstructor_1 = require("./CardsConstructor");
var formListener_1 = require("./formListener");
var arrForm = [];
var objLine = {
    type: arrForm,
};
var form = document.forms['fenceForm'];
var constrDiv = document.getElementById("fenceDiv");
var outputDiv = document.getElementById("constructOutput");
var addBtn = document.getElementById("addBtn");
var block2 = document.querySelector("#block2");
var hr = document.createElement('hr');
var btnCompute = document.querySelector('#btnCompute');
var cnt = 0;
new CardsConstructor_1.CardsConstructor("basementArr", bootstrapData_1.basementObj);
new CardsConstructor_1.CardsConstructor("pillarsArr", bootstrapData_1.pillarsObj);
new CardsConstructor_1.CardsConstructor("coveringArr", bootstrapData_1.coverObj);
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var arrLine = [];
    var lineForm = document.getElementById("lineForm");
    var newForm = lineForm.cloneNode(true);
    var startPoint = document.querySelector("#firstPoints1");
    var lastPoint = document.querySelector("#firstPoints2");
    var hr = document.createElement('hr');
    formListener_1.getSelected({ el1: startPoint, el2: lastPoint, arr: arrLine });
    var pillarNum = formListener_1.calcPillarNum(arrLine);
    arrLine.push(pillarNum);
    upCnt();
    formListener_1.innerDivLine(arrLine, outputDiv, cnt);
    outputDiv.append(hr);
    lineForm.remove();
    objLine[cnt] = arrLine;
    console.log(objLine);
    addBtn.after(newForm);
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (document.querySelector("input[name='basement']:checked") != null) {
        var answerBasement = document.querySelector("input[name='basement']:checked").value;
    }
    else {
        answerBasement = "";
    }
    if (document.querySelector("input[name='pillars']:checked") != null) {
        var answerPillar = document.querySelector("input[name='pillars']:checked").value;
    }
    else {
        answerPillar = "";
    }
    if (document.querySelector("input[name='cover']:checked") != null) {
        var answerCover = document.querySelector("input[name='cover']:checked").value;
    }
    else {
        answerCover = "";
    }
    arrForm.push(answerBasement, answerPillar, answerCover, 1, 2);
    constrDiv.setAttribute("style", "display: none;");
    block2.classList.remove("d-none");
    formListener_1.innerDiv(arrForm, outputDiv);
    outputDiv.append(hr);
});
function upCnt() { cnt++; }
btnCompute.addEventListener("click", function (e) {
    e.preventDefault();
    block2.classList.add("d-none");
    lengthCompute(objLine);
});
function lengthCompute(objFence) {
    console.log();
    /*for (let i = 0; i < objFence.length; i++) {
        if (el1[i].selected) {
            arr.push(el1[i].value);
        }*/
}
},{"./CardsConstructor":1,"./bootstrapData":2,"./formListener":3}],7:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRadio = void 0;
function uploadRadio(divCard, arr, i) {
    var divFooter = document.createElement('div');
    divFooter.classList.add('card-footer');
    var div = document.createElement('div');
    div.classList.add('custom-control', 'custom-radio');
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", "cardRadio" + i + "-" + arr[i].type);
    input.setAttribute("name", "" + arr[i].type);
    input.setAttribute("value", "" + arr[i].name);
    input.classList.add("custom-control-input");
    var label = document.createElement('label');
    label.classList.add("custom-control-label");
    label.setAttribute("for", "cardRadio" + i + "-" + arr[i].type);
    div.appendChild(input);
    div.appendChild(label);
    divFooter.appendChild(div);
    divCard.appendChild(divFooter);
}
exports.uploadRadio = uploadRadio;
},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2FyZHNDb25zdHJ1Y3Rvci50cyIsInNyYy9ib290c3RyYXBEYXRhLnRzIiwic3JjL2Zvcm1MaXN0ZW5lci50cyIsInNyYy9oZWFkZXJVcGxvYWQudHMiLCJzcmMvaW1nVXBsb2FkLnRzIiwic3JjL21haW4udHMiLCJzcmMvdXBsb2FkUmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSx5Q0FBd0M7QUFDeEMsK0NBQThDO0FBRTlDLDZDQUE0QztBQUU1QztJQUNJLDBCQUFZLEtBQWEsRUFBRSxZQUF3QjtRQUMvQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTFDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVCLHFCQUFTLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FB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VyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFsQkQsa0NBa0JDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgaW1nVXBsb2FkIH0gZnJvbSAnLi9pbWdVcGxvYWQnO1xyXG5pbXBvcnQgeyBoZWFkZXJVcGxvYWQgfSBmcm9tICcuL2hlYWRlclVwbG9hZCc7XHJcbmltcG9ydCB7IHBsdXNVcGxvYWQsIG1pbnVzVXBsb2FkIH0gZnJvbSAnLi9wbHVzVXBsb2FkJztcclxuaW1wb3J0IHsgdXBsb2FkUmFkaW8gfSBmcm9tICcuL3VwbG9hZFJhZGlvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkc0NvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpdklkOiBzdHJpbmcsIGJvb3RzdHJhcEFycjogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIGNvbnN0IGVsSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib290c3RyYXBBcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXZDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdkNvbC5jbGFzc0xpc3QuYWRkKFwiY29sLTZcIiwgXCJteS0xXCIsIFwicHgtMVwiLCBcImNvbC1sZy00XCIpO1xyXG4gICAgICAgICAgICBlbElkLmFwcGVuZENoaWxkKGRpdkNvbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGl2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImJvcmRlci13YXJuaW5nXCIsIFwiaC0xMDBcIik7XHJcbiAgICAgICAgICAgIGRpdkNvbC5hcHBlbmRDaGlsZChkaXZDYXJkKTtcclxuXHJcbiAgICAgICAgICAgIGltZ1VwbG9hZChkaXZDYXJkLCBib290c3RyYXBBcnIsIGkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpdkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdkJvZHkuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XHJcbiAgICAgICAgICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoZGl2Qm9keSk7XHJcblxyXG4gICAgICAgICAgICBoZWFkZXJVcGxvYWQoZGl2Qm9keSwgYm9vdHN0cmFwQXJyLCBpKTtcclxuICAgICAgICAgICAgLy9wbHVzVXBsb2FkKGRpdkJvZHksIGJvb3RzdHJhcEFyciwgaSk7XHJcbiAgICAgICAgICAgIC8vbWludXNVcGxvYWQoZGl2Qm9keSwgYm9vdHN0cmFwQXJyLCBpKTtcclxuICAgICAgICAgICAgdXBsb2FkUmFkaW8oZGl2Q2FyZCwgYm9vdHN0cmFwQXJyLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHZhciBiYXNlbWVudE9iaiA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMS4xLFxyXG4gICAgICAgIGltZzogXCJpbWcvYmFzZW1lbnQvUkZMLnBuZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0JbQtdC70LXQt9C+0LHQtdGC0L7QvdC90YvQuSDQu9C10L3RgtC+0YfQvdGL0Lkg0YTRg9C90LTQsNC80LXQvdGCXCIsXHJcbiAgICAgICAgcGx1czogW1wi0J3QtdGB0YPRidCw0Y8g0YHQv9C+0YHQvtCx0L3QvtGB0YLRjFwiLCBcItC00L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCLQodGC0L7QudC80L7RgdGC0YxcIl0sXHJcbiAgICAgICAgdHlwZTogXCJiYXNlbWVudFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMS4yLFxyXG4gICAgICAgIGltZzogXCJpbWcvYmFzZW1lbnQvUkYucG5nXCIsXHJcbiAgICAgICAgbmFtZTogXCLQltC10LvQtdC30L7QsdC10YLQvtC90L3Ri9C5INGE0YPQvdC00LDQvNC10L3RglwiLFxyXG4gICAgICAgIHBsdXM6IFtcItCU0L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCJD0YPRidC10YHRgtCy0LXQvdC90YvRhSDQvdC10YJcIl0sXHJcbiAgICAgICAgdHlwZTogXCJiYXNlbWVudFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMS4zLFxyXG4gICAgICAgIGltZzogXCJpbWcvYmFzZW1lbnQvUGlsbGFyLnBuZ1wiLFxyXG4gICAgICAgIG5hbWU6IGDQmtC+0LvQvtC90L3RiyDQsiDQs9GA0YPQvdGC0LVcclxuICAgICAgICAo0LHQtdC3INGE0YPQvdC00LDQvNC10L3RgtCwKWAsXHJcbiAgICAgICAgcGx1czogW1wi0KHRgtC+0LjQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCLQndC10LTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YwoMTAtMjAg0LvQtdGCKVwiXSxcclxuICAgICAgICB0eXBlOiBcImJhc2VtZW50XCIsXHJcbiAgICB9LFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCB2YXIgcGlsbGFyc09iaiA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMi4xLFxyXG4gICAgICAgIGltZzogXCJpbWcvcGlsbGFycy9CUC5wbmdcIixcclxuICAgICAgICBuYW1lOiBcItCQ0YDQvNC40YDQvtCy0LDQvdC90LDRjyDQutC70LDQtNC60LBcIixcclxuICAgICAgICBwbHVzOiBbXCLQndC10YHRg9GJ0LDRjyDRgdC/0L7RgdC+0LHQvdC+0YHRgtGMXCIsIFwi0LTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcItCh0YLQvtC50LzQvtGB0YLRjFwiXSxcclxuICAgICAgICB0eXBlOiBcInBpbGxhcnNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIuMixcclxuICAgICAgICBpbWc6IFwiaW1nL3BpbGxhcnMvTVAucG5nXCIsXHJcbiAgICAgICAgbmFtZTogXCLQnNC10YLQsNC70LvQvtC/0YDQvtC60LDRglwiLFxyXG4gICAgICAgIHBsdXM6IFtcItCU0L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCJD0YPRidC10YHRgtCy0LXQvdC90YvRhSDQvdC10YJcIl0sXHJcbiAgICAgICAgdHlwZTogXCJwaWxsYXJzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLjMsXHJcbiAgICAgICAgaW1nOiBcImltZy9waWxsYXJzL1dQLnBuZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0J/QuNC70L7QvNCw0YLQtdGA0LjQsNC70YtcIixcclxuICAgICAgICBwbHVzOiBbXCLQodGC0L7QuNC80L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcItCd0LXQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjCAoMTAtMjAg0LvQtdGCKVwiXSxcclxuICAgICAgICB0eXBlOiBcInBpbGxhcnNcIixcclxuICAgIH0sXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IHZhciBjb3Zlck9iaiA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMy4xLFxyXG4gICAgICAgIGltZzogXCJpbWcvY292ZXIvQnJpY2suanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLQmtC40YDQv9C40YdcIixcclxuICAgICAgICBwbHVzOiBbXCLQndC10YHRg9GJ0LDRjyDRgdC/0L7RgdC+0LHQvdC+0YHRgtGMXCIsIFwi0LTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcItCh0YLQvtC50LzQvtGB0YLRjFwiXSxcclxuICAgICAgICB0eXBlOiBcImNvdmVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLjIsXHJcbiAgICAgICAgaW1nOiBcImltZy9jb3Zlci9Qcm9mbGlzdC5qcGdcIixcclxuICAgICAgICBuYW1lOiBcItCf0YDQvtGE0LvQuNGB0YJcIixcclxuICAgICAgICBwbHVzOiBbXCLQlNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wiQ9GD0YnQtdGB0YLQstC10L3QvdGL0YUg0L3QtdGCXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMuMyxcclxuICAgICAgICBpbWc6IFwiaW1nL2NvdmVyL3dvb2QuanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLQlNC+0YHQutCwXCIsXHJcbiAgICAgICAgcGx1czogW1wi0KHRgtC+0LjQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbYNCd0LXQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjCAoMTAtMjAg0LvQtdGCKWBdLFxyXG4gICAgICAgIHR5cGU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMuNCxcclxuICAgICAgICBpbWc6IFwiaW1nL2NvdmVyL1NldGthUi5qcGdcIixcclxuICAgICAgICBuYW1lOiBcItCh0LXRgtC60LAg0YDQsNCx0LjRhtCwXCIsXHJcbiAgICAgICAgcGx1czogW1wi0KHRgtC+0LjQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCLQndC10LTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YwoMTAtMjAg0LvQtdGCKVwiXSxcclxuICAgICAgICB0eXBlOiBcImNvdmVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLjUsXHJcbiAgICAgICAgaW1nOiBcImltZy9jb3Zlci9TaHRha2V0LmpwZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0KjRgtCw0LrQtdGCXCIsXHJcbiAgICAgICAgcGx1czogW1wi0KHRgtC+0LjQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCLQndC10LTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YwoMTAtMjAg0LvQtdGCKVwiXSxcclxuICAgICAgICB0eXBlOiBcImNvdmVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLjYsXHJcbiAgICAgICAgaW1nOiBcImltZy9jb3Zlci9HaXR0ZXIuanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLQl0Qg0YHQtdGC0LrQsFwiLFxyXG4gICAgICAgIHBsdXM6IFtcItCh0YLQvtC40LzQvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wi0J3QtdC00L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMKDEwLTIwINC70LXRgilcIl0sXHJcbiAgICAgICAgdHlwZTogXCJjb3ZlclwiLFxyXG4gICAgfSxcclxuXTsiLCJleHBvcnQgZnVuY3Rpb24gaW5uZXJEaXYoYXJyOiBBcnJheTxhbnk+LCBkaXZFbDogSFRNTEVsZW1lbnQpIHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGgtMjsgaSsrKSB7XHJcblx0XHRpZiAoYXJyW2ldICE9IFwiXCIpIHtcclxuXHRcdFx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGlmIChpID09IDApIHtcclxuXHRcdFx0XHRkaXYuaW5uZXJUZXh0ID0gYNCk0YPQvdC00LDQvNC10L3RgjogICR7YXJyW2ldfWBcclxuXHRcdFx0fSBlbHNlIGlmIChpID09IDEpIHtcclxuXHRcdFx0XHRkaXYuaW5uZXJUZXh0ID0gYNCa0L7Qu9C+0L3QvdGLOiAgJHthcnJbaV19YFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRpdi5pbm5lclRleHQgPSBg0J/QvtC60YDRi9GC0LjQtTogICR7YXJyW2ldfWBcclxuXHRcdFx0fVxyXG5cdFx0XHRkaXZFbC5hcHBlbmRDaGlsZChkaXYpXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJEaXZMaW5lKGFycjogQXJyYXk8YW55PiwgZGl2RWw6IEhUTUxFbGVtZW50LCBjbnQ6IG51bWJlcikge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGlmIChpID09IDApIHtcclxuXHRcdFx0bGV0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG5cdFx0XHRoNC5pbm5lclRleHQgPSBg0KPRh9Cw0YHRgtC+0LogJHtjbnR9OmA7XHJcblx0XHRcdGRpdkVsLmFwcGVuZENoaWxkKGg0KTtcclxuXHRcdFx0ZGl2LmlubmVyVGV4dCA9IGDQvdCw0YfQsNC70L4g0YPRh9Cw0YHRgtC60LA6ICAke2FycltpXX1gXHJcblx0XHR9IGVsc2UgaWYgKGkgPT0gMSkge1xyXG5cdFx0XHRkaXYuaW5uZXJUZXh0ID0gYNC00LvQuNC90L3QsCDRg9GH0LDRgdGC0LrQsDogICR7YXJyW2ldfSDQvC5gXHRcdFx0XHJcblx0XHR9IGVsc2UgaWYgKGkgPT0gMikge1xyXG5cdFx0XHRkaXYuaW5uZXJUZXh0ID0gYNC60L7QvdC10YYg0YPRh9Cw0YHRgtC60LA6ICAke2FycltpXX1gXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXYuaW5uZXJUZXh0ID0gYNC90LXQvtCx0YXQvtC00LjQvNC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHRgtC+0LvQsdC+0LI6ICR7YXJyW2ldfWA7XHRcdFx0XHJcblx0XHR9XHJcblx0XHRkaXZFbC5hcHBlbmRDaGlsZChkaXYpO1x0XHRcdFx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY1BpbGxhck51bShhcnI6IEFycmF5PGFueT4pIHtcclxuXHRsZXQgcGlsbGFyIDogbnVtYmVyID0gKE1hdGguY2VpbChhcnJbMV0gLyAzKSktMTtcclxuXHRsZXQgY2FsY1BpbGxhciA6IG51bWJlcjtcclxuXHRpZiAoYXJyWzBdID09IFwi0JrRgNCw0Lkg0YEg0L7Qv9C+0YDQvtC5XCIgJiYgYXJyWzJdID09IFwi0JrRgNCw0Lkg0YEg0L7Qv9C+0YDQvtC5XCIpIHtcclxuXHRcdHJldHVybiBjYWxjUGlsbGFyID0gcGlsbGFyKzJcclxuXHR9IGVsc2UgaWYgKGFyclswXSA9PSBcItCj0LPQvtC7INC/0L7QstC+0YDQvtGC0LBcIiAmJiBhcnJbMl0gPT0gXCLQo9Cz0L7QuyDQv9C+0LLQvtGA0L7RgtCwXCIpIHtcclxuXHRcdHJldHVybiBjYWxjUGlsbGFyID0gcGlsbGFyKzFcclxuXHR9IGVsc2UgaWYgKGFyclswXSA9PSBcItCa0YDQsNC5INCx0LXQtyDQvtC/0L7RgNGLXCIgJiYgYXJyWzJdID09IFwi0JrRgNCw0Lkg0LHQtdC3INC+0L/QvtGA0YtcIikge1xyXG5cdFx0cmV0dXJuIGNhbGNQaWxsYXIgPSBwaWxsYXJcclxuXHR9IGVsc2UgaWYgKGFyclswXSA9PSBcItCa0YDQsNC5INCx0LXQtyDQvtC/0L7RgNGLXCIgfHwgYXJyWzJdID09IFwi0JrRgNCw0Lkg0LHQtdC3INC+0L/QvtGA0YtcIikge1xyXG5cdFx0Y2FsY1BpbGxhciA9IHBpbGxhclxyXG5cdH0gZWxzZSBpZiAoYXJyWzBdID09IFwi0KPQs9C+0Lsg0L/QvtCy0L7RgNC+0YLQsFwiIHx8IGFyclsyXSA9PSBcItCj0LPQvtC7INC/0L7QstC+0YDQvtGC0LBcIikge1xyXG5cdFx0Y2FsY1BpbGxhciA9IHBpbGxhciArIDAuNVxyXG5cdH0gZWxzZSBpZiAoYXJyWzBdID09IFwi0JrRgNCw0Lkg0YEg0L7Qv9C+0YDQvtC5XCIgfHwgYXJyWzJdID09IFwi0JrRgNCw0Lkg0YEg0L7Qv9C+0YDQvtC5XCIpIHtcclxuXHRcdGNhbGNQaWxsYXIgPSBjYWxjUGlsbGFyICsgMVxyXG5cdH1cclxuXHRyZXR1cm4gY2FsY1BpbGxhcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZCh7IGVsMSwgZWwyLCBhcnIgfTogeyBlbDE6IGFueTsgZWwyOiBhbnk7IGFycjogQXJyYXk8c3RyaW5nPjsgfSkge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZWwxLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoZWwxW2ldLnNlbGVjdGVkKSB7XHJcblx0XHRcdGFyci5wdXNoKGVsMVtpXS52YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZXQgbGluZUxlbmd0aDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0TWV0clwiKTtcclxuXHRsZXQgX2xpbmVMZW5ndGg6IHN0cmluZyA9IGxpbmVMZW5ndGgudmFsdWU7XHJcblx0YXJyLnB1c2goX2xpbmVMZW5ndGgpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGVsMi5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGVsMltpXS5zZWxlY3RlZCkge1xyXG5cdFx0XHRhcnIucHVzaChlbDJbaV0udmFsdWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhhcnIpO1xyXG59XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaGVhZGVyVXBsb2FkKGRpdjogSFRNTERpdkVsZW1lbnQsIGFycjogQXJyYXk8YW55PiwgaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgZWxINiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGVsSDYuaW5uZXJUZXh0ID0gKGAke2FycltpXS5uYW1lfWApO1xyXG4gICAgZWxINi5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWxINik7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGltZ1VwbG9hZChkaXZDYXJkOiBIVE1MRGl2RWxlbWVudCwgYXJyOiBBcnJheTxhbnk+LCBpOiBudW1iZXIpIHtcclxuICAgIGxldCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkltZy5zdHlsZS5tYXhIZWlnaHQgPSBcIjUwMHB4XCI7ICAgIFxyXG4gICAgZGl2Q2FyZC5hcHBlbmRDaGlsZChkaXZJbWcpO1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vXCIgKyBhcnJbaV0uaW1nKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnKTtcclxuICAgIGltZy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgZGl2SW1nLmFwcGVuZENoaWxkKGltZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYmFzZW1lbnRPYmosIHBpbGxhcnNPYmosIGNvdmVyT2JqIH0gZnJvbSAnLi9ib290c3RyYXBEYXRhJztcclxuaW1wb3J0IHsgQ2FyZHNDb25zdHJ1Y3RvciB9IGZyb20gJy4vQ2FyZHNDb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IGlubmVyRGl2LCBpbm5lckRpdkxpbmUsIGNhbGNQaWxsYXJOdW0sIGdldFNlbGVjdGVkIH0gZnJvbSAnLi9mb3JtTGlzdGVuZXInO1xyXG5cclxudmFyIGFyckZvcm06IEFycmF5PGFueT4gPSBbXTtcclxubGV0IG9iakxpbmUgOiB7XHJcblx0dHlwZTogQXJyYXk8c3RyaW5nPixcclxuXHRba2V5OiBudW1iZXJdOiBBcnJheTxhbnk+LFx0XHJcbn0gPSB7XHJcblx0dHlwZTogYXJyRm9ybSxcdFxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmZvcm1zWzxhbnk+J2ZlbmNlRm9ybSddO1xyXG5jb25zdCBjb25zdHJEaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZW5jZURpdlwiKTtcclxuY29uc3Qgb3V0cHV0RGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc3RydWN0T3V0cHV0XCIpO1xyXG5jb25zdCBhZGRCdG46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdG5cIik7XHJcbmNvbnN0IGJsb2NrMjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2NrMlwiKTtcclxuY29uc3QgaHIgOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuY29uc3QgYnRuQ29tcHV0ZSA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNvbXB1dGUnKVxyXG5sZXQgY250ID0gMDtcclxuXHJcblxyXG5cclxubmV3IENhcmRzQ29uc3RydWN0b3IoXCJiYXNlbWVudEFyclwiLCBiYXNlbWVudE9iaik7XHJcbm5ldyBDYXJkc0NvbnN0cnVjdG9yKFwicGlsbGFyc0FyclwiLCBwaWxsYXJzT2JqKTtcclxubmV3IENhcmRzQ29uc3RydWN0b3IoXCJjb3ZlcmluZ0FyclwiLCBjb3Zlck9iaik7XHJcblxyXG5cclxuXHJcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGFyckxpbmU6IEFycmF5PGFueT4gPSBbXTtcclxuXHRsZXQgbGluZUZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lRm9ybVwiKTtcclxuXHRsZXQgbmV3Rm9ybSA9IGxpbmVGb3JtLmNsb25lTm9kZSh0cnVlKTtcclxuXHRsZXQgc3RhcnRQb2ludDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpcnN0UG9pbnRzMVwiKTtcclxuXHRsZXQgbGFzdFBvaW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3RQb2ludHMyXCIpO1x0XHJcblx0bGV0IGhyIDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcblxyXG5cdGdldFNlbGVjdGVkKHsgZWwxOiBzdGFydFBvaW50LCBlbDI6IGxhc3RQb2ludCwgYXJyOiBhcnJMaW5lIH0pO1xyXG5cclxuXHRsZXQgcGlsbGFyTnVtID0gY2FsY1BpbGxhck51bShhcnJMaW5lKTtcclxuXHRhcnJMaW5lLnB1c2gocGlsbGFyTnVtKTtcclxuXHJcblx0dXBDbnQoKTtcclxuXHRpbm5lckRpdkxpbmUoYXJyTGluZSwgb3V0cHV0RGl2LCBjbnQpO1xyXG5cdG91dHB1dERpdi5hcHBlbmQoaHIpO1xyXG5cdGxpbmVGb3JtLnJlbW92ZSgpO1xyXG5cclxuXHRvYmpMaW5lW2NudF0gPSBhcnJMaW5lO1xyXG5cdGNvbnNvbGUubG9nKG9iakxpbmUpO1x0XHJcblx0YWRkQnRuLmFmdGVyKG5ld0Zvcm0pO1x0XHJcbn0pXHJcblxyXG5cclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IGFueSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8YW55PlwiaW5wdXRbbmFtZT0nYmFzZW1lbnQnXTpjaGVja2VkXCIpICE9IG51bGwpIHtcclxuXHRcdHZhciBhbnN3ZXJCYXNlbWVudDogc3RyaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8YW55PlwiaW5wdXRbbmFtZT0nYmFzZW1lbnQnXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cdH0gZWxzZSB7IGFuc3dlckJhc2VtZW50ID0gXCJcIiB9XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoPGFueT5cImlucHV0W25hbWU9J3BpbGxhcnMnXTpjaGVja2VkXCIpICE9IG51bGwpIHtcclxuXHRcdHZhciBhbnN3ZXJQaWxsYXI6IHN0cmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoPGFueT5cImlucHV0W25hbWU9J3BpbGxhcnMnXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cdH0gZWxzZSB7IGFuc3dlclBpbGxhciA9IFwiXCIgfVxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKDxhbnk+XCJpbnB1dFtuYW1lPSdjb3ZlciddOmNoZWNrZWRcIikgIT0gbnVsbCkge1xyXG5cdFx0dmFyIGFuc3dlckNvdmVyOiBzdHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKDxhbnk+XCJpbnB1dFtuYW1lPSdjb3ZlciddOmNoZWNrZWRcIikudmFsdWU7XHJcblx0fSBlbHNlIHsgYW5zd2VyQ292ZXIgPSBcIlwiIH1cclxuXHJcblx0YXJyRm9ybS5wdXNoKGFuc3dlckJhc2VtZW50LCBhbnN3ZXJQaWxsYXIsIGFuc3dlckNvdmVyLCAxLCAyKTtcclxuXHJcblx0Y29uc3RyRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XHJcblx0YmxvY2syLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG5cdGlubmVyRGl2KGFyckZvcm0sIG91dHB1dERpdik7XHJcblx0b3V0cHV0RGl2LmFwcGVuZChocilcclxufSk7XHJcblxyXG5mdW5jdGlvbiB1cENudCgpIHtjbnQrKzt9XHJcblxyXG5idG5Db21wdXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0YmxvY2syLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuXHRsZW5ndGhDb21wdXRlKG9iakxpbmUpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoQ29tcHV0ZSAob2JqRmVuY2U6IG9iamVjdCkge1x0XHJcblxyXG5cdGNvbnNvbGUubG9nKClcclxuXHQvKmZvciAobGV0IGkgPSAwOyBpIDwgb2JqRmVuY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChlbDFbaV0uc2VsZWN0ZWQpIHtcclxuXHRcdFx0YXJyLnB1c2goZWwxW2ldLnZhbHVlKTtcclxuXHRcdH0qL1xyXG59IiwiLypcclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZFJhZGlvKGRpdkNhcmQ6IEhUTUxEaXZFbGVtZW50LCBhcnI6IEFycmF5PGFueT4sIGk6IG51bWJlcikge1xyXG4gICAgbGV0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZm9vdGVyJyk7XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1jb250cm9sJywgJ2N1c3RvbS1yYWRpbycpO1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2FyZFJhZGlvJHtpfS0ke2FycltpXS50eXBlfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgJHthcnJbaV0udHlwZX1gKTtcclxuICAgIC8vaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7YXJyW2ldLm5hbWV9YCk7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2stbGFiZWxcIik7XHJcbiAgICAvL2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgY2FyZFJhZGlvJHtpfS0ke2FycltpXS50eXBlfWApO1xyXG5cclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBkaXZGb290ZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcclxufSovXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZFJhZGlvKGRpdkNhcmQ6IEhUTUxEaXZFbGVtZW50LCBhcnI6IEFycmF5PGFueT4sIGk6IG51bWJlcikge1xyXG4gICAgbGV0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZm9vdGVyJyk7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWNvbnRyb2wnLCAnY3VzdG9tLXJhZGlvJyk7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNhcmRSYWRpbyR7aX0tJHthcnJbaV0udHlwZX1gKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYCR7YXJyW2ldLnR5cGV9YCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHthcnJbaV0ubmFtZX1gKTtcclxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tY29udHJvbC1pbnB1dFwiKTtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYGNhcmRSYWRpbyR7aX0tJHthcnJbaV0udHlwZX1gKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgZGl2Rm9vdGVyLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBkaXZDYXJkLmFwcGVuZENoaWxkKGRpdkZvb3Rlcik7XHJcbn1cclxuIl19
