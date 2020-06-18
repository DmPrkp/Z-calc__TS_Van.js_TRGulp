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
},{"./headerUpload":4,"./imgUpload":5,"./uploadRadio":8}],2:[function(require,module,exports){
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
        name: "\u0411\u0435\u0437 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430",
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
    var _lineLength = +lineLength.value;
    console.log(_lineLength);
    arr.push(_lineLength);
    for (var i = 0; i < el2.length; i++) {
        if (el2[i].selected) {
            arr.push(el2[i].value);
        }
    }
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
var showObj_1 = require("./showObj");
var arrForm = [];
var allLine = [];
var objLine = {
    type: arrForm,
    fenceLength: 0,
    allpillarNum: 0,
    arrLine: allLine,
    freezDepth: 1,
    hight: 2,
};
var form = document.forms['fenceForm'];
var constrDiv = document.getElementById("fenceDiv");
var outputDiv = document.getElementById("constructOutput");
var addBtn = document.getElementById("addBtn");
var block2 = document.querySelector("#block2");
var hr = document.createElement('hr');
var btnCompute = document.querySelector('#btnCompute');
var finalCalcDiv = document.querySelector("#finalCalcDiv");
var сalcContentDiv = document.querySelector("#сalcContent");
var cnt = 0;
new CardsConstructor_1.CardsConstructor("basementArr", bootstrapData_1.basementObj);
new CardsConstructor_1.CardsConstructor("pillarsArr", bootstrapData_1.pillarsObj);
new CardsConstructor_1.CardsConstructor("coveringArr", bootstrapData_1.coverObj);
//Кнопка далее на превой странице
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
    arrForm.push(answerBasement, answerPillar, answerCover);
    constrDiv.setAttribute("style", "display: none;");
    block2.classList.remove("d-none");
    formListener_1.innerDiv(arrForm, outputDiv);
    outputDiv.append(hr);
});
//Кнопка добавить участок 
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var arrLine = [];
    var lineForm = document.getElementById("lineForm");
    var newForm = lineForm.cloneNode(true);
    var startPoint = document.querySelector("#firstPoints");
    var lastPoint = document.querySelector("#secondPoints");
    var hr = document.createElement('hr');
    formListener_1.getSelected({ el1: startPoint, el2: lastPoint, arr: arrLine });
    var pillarNum = formListener_1.calcPillarNum(arrLine);
    allLine.push(arrLine);
    objLine.allpillarNum = objLine.allpillarNum + pillarNum;
    objLine.fenceLength = objLine.fenceLength + arrLine[1];
    upCnt();
    formListener_1.innerDivLine(arrLine, outputDiv, cnt);
    outputDiv.append(hr);
    lineForm.remove();
    console.log(objLine);
    addBtn.after(newForm);
});
function upCnt() { cnt++; }
//Кнопка расчитать на второй странице
btnCompute.addEventListener("click", function (e) {
    e.preventDefault();
    block2.classList.add("d-none");
    finalCalcDiv.classList.remove("d-none");
    formListener_1.innerDiv(arrForm, сalcContentDiv);
    showObj_1.showObj(objLine, сalcContentDiv);
    сalcContentDiv.append(hr);
    showObj_1.reinforcedBaseCulc(objLine);
});
},{"./CardsConstructor":1,"./bootstrapData":2,"./formListener":3,"./showObj":7}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reinforcedBaseCulc = exports.showObj = void 0;
function showObj(obj, mainDiv) {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.innerText = "\u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u043E\u043B\u0431\u043E\u0432:  " + obj.allpillarNum;
    div2.innerText = "\u041E\u0431\u0449\u0430\u044F \u0434\u043B\u0438\u043D\u043D\u0430 \u043E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F:  " + obj.fenceLength;
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
}
exports.showObj = showObj;
function reinforcedBaseCulc(obj) {
    var finalObj = {};
    var volumePillar = (obj.freezDepth * 0.16 * obj.allpillarNum);
    var lengthMinusPillar = obj.fenceLength - (obj.allpillarNum * 0.4);
    var volumeLine = lengthMinusPillar * 0.16;
    var allConcreteVolume = +((volumeLine + volumePillar).toFixed(2));
    var reinforcement12 = +(((lengthMinusPillar + (obj.allpillarNum * obj.freezDepth)) * 4).toFixed(2));
    var reinforcement6 = +(((lengthMinusPillar + (obj.allpillarNum * obj.freezDepth)) * 1.56 / 0.3).toFixed(2));
    finalObj.concreteVolume = allConcreteVolume;
    finalObj.reinforcement12 = reinforcement12;
    finalObj.reinforcement6 = reinforcement6;
    console.log("\n    \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043E\u0431\u044A\u0435\u043C \u0431\u0435\u0442\u043E\u043D\u0430 " + allConcreteVolume + " \u043C3\n    \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0430\u0440\u043C\u0430\u0442\u0443\u0440\u044B \u230012 " + reinforcement12 + "  \u043C/\u043F\n    \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0430\u0440\u043C\u0430\u0442\u0443\u0440\u044B \u23006 " + reinforcement6 + "  \u043C/\u043F");
    return finalObj;
}
exports.reinforcedBaseCulc = reinforcedBaseCulc;
},{}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2FyZHNDb25zdHJ1Y3Rvci50cyIsInNyYy9ib290c3RyYXBEYXRhLnRzIiwic3JjL2Zvcm1MaXN0ZW5lci50cyIsInNyYy9oZWFkZXJVcGxvYWQudHMiLCJzcmMvaW1nVXBsb2FkLnRzIiwic3JjL21haW4udHMiLCJzcmMvc2hvd09iai50cyIsInNyYy91cGxvYWRSYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLHlDQUF3QztBQUN4QywrQ0FBOEM7QUFFOUMsNkNBQTRDO0FBRTVDO0lBQ0ksMEJBQVksS0FBYSxFQUFFLFlBQXdCO1FBQy9DLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFMUMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXpCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUIscUJBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxh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KCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IGltZ1VwbG9hZCB9IGZyb20gJy4vaW1nVXBsb2FkJztcclxuaW1wb3J0IHsgaGVhZGVyVXBsb2FkIH0gZnJvbSAnLi9oZWFkZXJVcGxvYWQnO1xyXG5pbXBvcnQgeyBwbHVzVXBsb2FkLCBtaW51c1VwbG9hZCB9IGZyb20gJy4vcGx1c1VwbG9hZCc7XHJcbmltcG9ydCB7IHVwbG9hZFJhZGlvIH0gZnJvbSAnLi91cGxvYWRSYWRpbyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZHNDb25zdHJ1Y3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXZJZDogc3RyaW5nLCBib290c3RyYXBBcnI6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBjb25zdCBlbElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9vdHN0cmFwQXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGl2Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXZDb2wuY2xhc3NMaXN0LmFkZChcImNvbC02XCIsIFwibXktMVwiLCBcInB4LTFcIiwgXCJjb2wtbGctNFwiKTtcclxuICAgICAgICAgICAgZWxJZC5hcHBlbmRDaGlsZChkaXZDb2wpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpdkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdkNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJib3JkZXItd2FybmluZ1wiLCBcImgtMTAwXCIpO1xyXG4gICAgICAgICAgICBkaXZDb2wuYXBwZW5kQ2hpbGQoZGl2Q2FyZCk7XHJcblxyXG4gICAgICAgICAgICBpbWdVcGxvYWQoZGl2Q2FyZCwgYm9vdHN0cmFwQXJyLCBpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXZCb2R5LmNsYXNzTGlzdC5hZGQoJ2NhcmQtYm9keScpO1xyXG4gICAgICAgICAgICBkaXZDYXJkLmFwcGVuZENoaWxkKGRpdkJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyVXBsb2FkKGRpdkJvZHksIGJvb3RzdHJhcEFyciwgaSk7XHJcbiAgICAgICAgICAgIC8vcGx1c1VwbG9hZChkaXZCb2R5LCBib290c3RyYXBBcnIsIGkpO1xyXG4gICAgICAgICAgICAvL21pbnVzVXBsb2FkKGRpdkJvZHksIGJvb3RzdHJhcEFyciwgaSk7XHJcbiAgICAgICAgICAgIHVwbG9hZFJhZGlvKGRpdkNhcmQsIGJvb3RzdHJhcEFyciwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgYmFzZW1lbnRPYmogPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEuMSxcclxuICAgICAgICBpbWc6IFwiaW1nL2Jhc2VtZW50L1JGTC5wbmdcIixcclxuICAgICAgICBuYW1lOiBcItCW0LXQu9C10LfQvtCx0LXRgtC+0L3QvdGL0Lkg0LvQtdC90YLQvtGH0L3Ri9C5INGE0YPQvdC00LDQvNC10L3RglwiLFxyXG4gICAgICAgIHBsdXM6IFtcItCd0LXRgdGD0YnQsNGPINGB0L/QvtGB0L7QsdC90L7RgdGC0YxcIiwgXCLQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wi0KHRgtC+0LnQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiYmFzZW1lbnRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEuMixcclxuICAgICAgICBpbWc6IFwiaW1nL2Jhc2VtZW50L1JGLnBuZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0JbQtdC70LXQt9C+0LHQtdGC0L7QvdC90YvQuSDRhNGD0L3QtNCw0LzQtdC90YJcIixcclxuICAgICAgICBwbHVzOiBbXCLQlNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wiQ9GD0YnQtdGB0YLQstC10L3QvdGL0YUg0L3QtdGCXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiYmFzZW1lbnRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEuMyxcclxuICAgICAgICBpbWc6IFwiaW1nL2Jhc2VtZW50L1BpbGxhci5wbmdcIixcclxuICAgICAgICBuYW1lOiBg0JHQtdC3INGE0YPQvdC00LDQvNC10L3RgtCwYCxcclxuICAgICAgICBwbHVzOiBbXCLQodGC0L7QuNC80L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcItCd0LXQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjCgxMC0yMCDQu9C10YIpXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiYmFzZW1lbnRcIixcclxuICAgIH0sXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IHZhciBwaWxsYXJzT2JqID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLjEsXHJcbiAgICAgICAgaW1nOiBcImltZy9waWxsYXJzL0JQLnBuZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0JDRgNC80LjRgNC+0LLQsNC90L3QsNGPINC60LvQsNC00LrQsFwiLFxyXG4gICAgICAgIHBsdXM6IFtcItCd0LXRgdGD0YnQsNGPINGB0L/QvtGB0L7QsdC90L7RgdGC0YxcIiwgXCLQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wi0KHRgtC+0LnQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIHR5cGU6IFwicGlsbGFyc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMi4yLFxyXG4gICAgICAgIGltZzogXCJpbWcvcGlsbGFycy9NUC5wbmdcIixcclxuICAgICAgICBuYW1lOiBcItCc0LXRgtCw0LvQu9C+0L/RgNC+0LrQsNGCXCIsXHJcbiAgICAgICAgcGx1czogW1wi0JTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcIkPRg9GJ0LXRgdGC0LLQtdC90L3Ri9GFINC90LXRglwiXSxcclxuICAgICAgICB0eXBlOiBcInBpbGxhcnNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIuMyxcclxuICAgICAgICBpbWc6IFwiaW1nL3BpbGxhcnMvV1AucG5nXCIsXHJcbiAgICAgICAgbmFtZTogXCLQn9C40LvQvtC80LDRgtC10YDQuNCw0LvRi1wiLFxyXG4gICAgICAgIHBsdXM6IFtcItCh0YLQvtC40LzQvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wi0J3QtdC00L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMICgxMC0yMCDQu9C10YIpXCJdLFxyXG4gICAgICAgIHR5cGU6IFwicGlsbGFyc1wiLFxyXG4gICAgfSxcclxuXHJcbl07XHJcblxyXG5leHBvcnQgdmFyIGNvdmVyT2JqID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLjEsXHJcbiAgICAgICAgaW1nOiBcImltZy9jb3Zlci9Ccmljay5qcGdcIixcclxuICAgICAgICBuYW1lOiBcItCa0LjRgNC/0LjRh1wiLFxyXG4gICAgICAgIHBsdXM6IFtcItCd0LXRgdGD0YnQsNGPINGB0L/QvtGB0L7QsdC90L7RgdGC0YxcIiwgXCLQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjFwiXSxcclxuICAgICAgICBtaW51czogW1wi0KHRgtC+0LnQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMuMixcclxuICAgICAgICBpbWc6IFwiaW1nL2NvdmVyL1Byb2ZsaXN0LmpwZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0J/RgNC+0YTQu9C40YHRglwiLFxyXG4gICAgICAgIHBsdXM6IFtcItCU0L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCJD0YPRidC10YHRgtCy0LXQvdC90YvRhSDQvdC10YJcIl0sXHJcbiAgICAgICAgdHlwZTogXCJjb3ZlclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMy4zLFxyXG4gICAgICAgIGltZzogXCJpbWcvY292ZXIvd29vZC5qcGdcIixcclxuICAgICAgICBuYW1lOiBcItCU0L7RgdC60LBcIixcclxuICAgICAgICBwbHVzOiBbXCLQodGC0L7QuNC80L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtg0J3QtdC00L7Qu9Cz0L7QstC10YfQvdC+0YHRgtGMICgxMC0yMCDQu9C10YIpYF0sXHJcbiAgICAgICAgdHlwZTogXCJjb3ZlclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMy40LFxyXG4gICAgICAgIGltZzogXCJpbWcvY292ZXIvU2V0a2FSLmpwZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi0KHQtdGC0LrQsCDRgNCw0LHQuNGG0LBcIixcclxuICAgICAgICBwbHVzOiBbXCLQodGC0L7QuNC80L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcItCd0LXQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjCgxMC0yMCDQu9C10YIpXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMuNSxcclxuICAgICAgICBpbWc6IFwiaW1nL2NvdmVyL1NodGFrZXQuanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLQqNGC0LDQutC10YJcIixcclxuICAgICAgICBwbHVzOiBbXCLQodGC0L7QuNC80L7RgdGC0YxcIl0sXHJcbiAgICAgICAgbWludXM6IFtcItCd0LXQtNC+0LvQs9C+0LLQtdGH0L3QvtGB0YLRjCgxMC0yMCDQu9C10YIpXCJdLFxyXG4gICAgICAgIHR5cGU6IFwiY292ZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMuNixcclxuICAgICAgICBpbWc6IFwiaW1nL2NvdmVyL0dpdHRlci5qcGdcIixcclxuICAgICAgICBuYW1lOiBcItCXRCDRgdC10YLQutCwXCIsXHJcbiAgICAgICAgcGx1czogW1wi0KHRgtC+0LjQvNC+0YHRgtGMXCJdLFxyXG4gICAgICAgIG1pbnVzOiBbXCLQndC10LTQvtC70LPQvtCy0LXRh9C90L7RgdGC0YwoMTAtMjAg0LvQtdGCKVwiXSxcclxuICAgICAgICB0eXBlOiBcImNvdmVyXCIsXHJcbiAgICB9LFxyXG5dOyIsImV4cG9ydCBmdW5jdGlvbiBpbm5lckRpdihhcnI6IEFycmF5PGFueT4sIGRpdkVsOiBIVE1MRWxlbWVudCkge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aC0yOyBpKyspIHtcclxuXHRcdGlmIChhcnJbaV0gIT0gXCJcIikge1xyXG5cdFx0XHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0aWYgKGkgPT0gMCkge1xyXG5cdFx0XHRcdGRpdi5pbm5lclRleHQgPSBg0KTRg9C90LTQsNC80LXQvdGCOiAgJHthcnJbaV19YFxyXG5cdFx0XHR9IGVsc2UgaWYgKGkgPT0gMSkge1xyXG5cdFx0XHRcdGRpdi5pbm5lclRleHQgPSBg0JrQvtC70L7QvdC90Ys6ICAke2FycltpXX1gXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGl2LmlubmVyVGV4dCA9IGDQn9C+0LrRgNGL0YLQuNC1OiAgJHthcnJbaV19YFxyXG5cdFx0XHR9XHJcblx0XHRcdGRpdkVsLmFwcGVuZENoaWxkKGRpdilcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbm5lckRpdkxpbmUoYXJyOiBBcnJheTxhbnk+LCBkaXZFbDogSFRNTEVsZW1lbnQsIGNudDogbnVtYmVyKSB7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0aWYgKGkgPT0gMCkge1xyXG5cdFx0XHRsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcblx0XHRcdGg0LmlubmVyVGV4dCA9IGDQo9GH0LDRgdGC0L7QuiAke2NudH06YDtcclxuXHRcdFx0ZGl2RWwuYXBwZW5kQ2hpbGQoaDQpO1xyXG5cdFx0XHRkaXYuaW5uZXJUZXh0ID0gYNC90LDRh9Cw0LvQviDRg9GH0LDRgdGC0LrQsDogICR7YXJyW2ldfWBcclxuXHRcdH0gZWxzZSBpZiAoaSA9PSAxKSB7XHJcblx0XHRcdGRpdi5pbm5lclRleHQgPSBg0LTQu9C40L3QvdCwINGD0YfQsNGB0YLQutCwOiAgJHthcnJbaV19INC8LmBcdFx0XHRcclxuXHRcdH0gZWxzZSBpZiAoaSA9PSAyKSB7XHJcblx0XHRcdGRpdi5pbm5lclRleHQgPSBg0LrQvtC90LXRhiDRg9GH0LDRgdGC0LrQsDogICR7YXJyW2ldfWBcdFx0XHRcclxuXHRcdH1cclxuXHRcdGRpdkVsLmFwcGVuZENoaWxkKGRpdik7XHRcdFx0XHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjUGlsbGFyTnVtKGFycjogQXJyYXk8YW55Pikge1xyXG5cdGxldCBwaWxsYXIgOiBudW1iZXIgPSAoTWF0aC5jZWlsKGFyclsxXSAvIDMpKS0xO1xyXG5cdGxldCBjYWxjUGlsbGFyIDogbnVtYmVyO1xyXG5cdGlmIChhcnJbMF0gPT0gXCLQmtGA0LDQuSDRgSDQvtC/0L7RgNC+0LlcIiAmJiBhcnJbMl0gPT0gXCLQmtGA0LDQuSDRgSDQvtC/0L7RgNC+0LlcIikge1xyXG5cdFx0cmV0dXJuIGNhbGNQaWxsYXIgPSBwaWxsYXIrMlxyXG5cdH0gZWxzZSBpZiAoYXJyWzBdID09IFwi0KPQs9C+0Lsg0L/QvtCy0L7RgNC+0YLQsFwiICYmIGFyclsyXSA9PSBcItCj0LPQvtC7INC/0L7QstC+0YDQvtGC0LBcIikge1xyXG5cdFx0cmV0dXJuIGNhbGNQaWxsYXIgPSBwaWxsYXIrMVxyXG5cdH0gZWxzZSBpZiAoYXJyWzBdID09IFwi0JrRgNCw0Lkg0LHQtdC3INC+0L/QvtGA0YtcIiAmJiBhcnJbMl0gPT0gXCLQmtGA0LDQuSDQsdC10Lcg0L7Qv9C+0YDRi1wiKSB7XHJcblx0XHRyZXR1cm4gY2FsY1BpbGxhciA9IHBpbGxhclxyXG5cdH0gZWxzZSBpZiAoYXJyWzBdID09IFwi0JrRgNCw0Lkg0LHQtdC3INC+0L/QvtGA0YtcIiB8fCBhcnJbMl0gPT0gXCLQmtGA0LDQuSDQsdC10Lcg0L7Qv9C+0YDRi1wiKSB7XHJcblx0XHRjYWxjUGlsbGFyID0gcGlsbGFyXHJcblx0fSBlbHNlIGlmIChhcnJbMF0gPT0gXCLQo9Cz0L7QuyDQv9C+0LLQvtGA0L7RgtCwXCIgfHwgYXJyWzJdID09IFwi0KPQs9C+0Lsg0L/QvtCy0L7RgNC+0YLQsFwiKSB7XHJcblx0XHRjYWxjUGlsbGFyID0gcGlsbGFyICsgMC41XHJcblx0fSBlbHNlIGlmIChhcnJbMF0gPT0gXCLQmtGA0LDQuSDRgSDQvtC/0L7RgNC+0LlcIiB8fCBhcnJbMl0gPT0gXCLQmtGA0LDQuSDRgSDQvtC/0L7RgNC+0LlcIikge1xyXG5cdFx0Y2FsY1BpbGxhciA9IGNhbGNQaWxsYXIgKyAxXHJcblx0fVx0XHJcblx0cmV0dXJuIGNhbGNQaWxsYXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWQoeyBlbDEsIGVsMiwgYXJyIH06IHsgZWwxOiBhbnk7IGVsMjogYW55OyBhcnI6IEFycmF5PGFueT47IH0pIHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGVsMS5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGVsMVtpXS5zZWxlY3RlZCkge1xyXG5cdFx0XHRhcnIucHVzaChlbDFbaV0udmFsdWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGV0IGxpbmVMZW5ndGg6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRNZXRyXCIpO1xyXG5cdGxldCBfbGluZUxlbmd0aDogbnVtYmVyID0gK2xpbmVMZW5ndGgudmFsdWU7XHJcblx0Y29uc29sZS5sb2coX2xpbmVMZW5ndGgpO1xyXG5cdGFyci5wdXNoKF9saW5lTGVuZ3RoKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbDIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChlbDJbaV0uc2VsZWN0ZWQpIHtcclxuXHRcdFx0YXJyLnB1c2goZWwyW2ldLnZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHRcclxufVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhlYWRlclVwbG9hZChkaXY6IEhUTUxEaXZFbGVtZW50LCBhcnI6IEFycmF5PGFueT4sIGk6IG51bWJlcikge1xyXG4gICAgbGV0IGVsSDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBlbEg2LmlubmVyVGV4dCA9IChgJHthcnJbaV0ubmFtZX1gKTtcclxuICAgIGVsSDYuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGVsSDYpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpbWdVcGxvYWQoZGl2Q2FyZDogSFRNTERpdkVsZW1lbnQsIGFycjogQXJyYXk8YW55PiwgaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGl2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZJbWcuc3R5bGUubWF4SGVpZ2h0ID0gXCI1MDBweFwiOyAgICBcclxuICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoZGl2SW1nKTtcclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL1wiICsgYXJyW2ldLmltZyk7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWctdG9wJyk7XHJcbiAgICBpbWcuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgIGRpdkltZy5hcHBlbmRDaGlsZChpbWcpO1xyXG59XHJcbiIsImltcG9ydCB7IGJhc2VtZW50T2JqLCBwaWxsYXJzT2JqLCBjb3Zlck9iaiB9IGZyb20gJy4vYm9vdHN0cmFwRGF0YSc7XHJcbmltcG9ydCB7IENhcmRzQ29uc3RydWN0b3IgfSBmcm9tICcuL0NhcmRzQ29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBpbm5lckRpdiwgaW5uZXJEaXZMaW5lLCBjYWxjUGlsbGFyTnVtLCBnZXRTZWxlY3RlZCB9IGZyb20gJy4vZm9ybUxpc3RlbmVyJztcclxuaW1wb3J0IHsgc2hvd09iaiwgcmVpbmZvcmNlZEJhc2VDdWxjIH0gZnJvbSAnLi9zaG93T2JqJztcclxuXHJcbmNvbnN0IGFyckZvcm06IEFycmF5PGFueT4gPSBbXTtcclxuY29uc3QgYWxsTGluZTogQXJyYXk8YW55PiA9IFtdO1xyXG5jb25zdCBvYmpMaW5lIDoge1xyXG5cdHR5cGU6IEFycmF5PGFueT4sXHJcblx0YWxscGlsbGFyTnVtOiBudW1iZXIsXHJcblx0ZmVuY2VMZW5ndGg6IG51bWJlcixcclxuXHRhcnJMaW5lOiBBcnJheTxhbnk+LFxyXG5cdGZyZWV6RGVwdGg6IG51bWJlcixcclxuXHRoaWdodDogbnVtYmVyLFx0XHJcbn0gPSB7XHJcblx0dHlwZTogYXJyRm9ybSxcclxuXHRmZW5jZUxlbmd0aDogMCxcclxuXHRhbGxwaWxsYXJOdW06IDAsXHJcblx0YXJyTGluZTogYWxsTGluZSxcclxuXHRmcmVlekRlcHRoOiAxLFxyXG5cdGhpZ2h0OiAyLFx0XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZm9ybXNbPGFueT4nZmVuY2VGb3JtJ107XHJcbmNvbnN0IGNvbnN0ckRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlbmNlRGl2XCIpO1xyXG5jb25zdCBvdXRwdXREaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25zdHJ1Y3RPdXRwdXRcIik7XHJcbmNvbnN0IGFkZEJ0bjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ0blwiKTtcclxuY29uc3QgYmxvY2syOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvY2syXCIpO1xyXG5jb25zdCBociA6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG5jb25zdCBidG5Db21wdXRlIDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuQ29tcHV0ZScpXHJcbmNvbnN0IGZpbmFsQ2FsY0RpdiA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5hbENhbGNEaXZcIilcclxuY29uc3Qg0YFhbGNDb250ZW50RGl2IDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI9GBYWxjQ29udGVudFwiKVxyXG5sZXQgY250ID0gMDtcclxuXHJcbm5ldyBDYXJkc0NvbnN0cnVjdG9yKFwiYmFzZW1lbnRBcnJcIiwgYmFzZW1lbnRPYmopO1xyXG5uZXcgQ2FyZHNDb25zdHJ1Y3RvcihcInBpbGxhcnNBcnJcIiwgcGlsbGFyc09iaik7XHJcbm5ldyBDYXJkc0NvbnN0cnVjdG9yKFwiY292ZXJpbmdBcnJcIiwgY292ZXJPYmopO1xyXG5cclxuLy/QmtC90L7Qv9C60LAg0LTQsNC70LXQtSDQvdCwINC/0YDQtdCy0L7QuSDRgdGC0YDQsNC90LjRhtC1XHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IGFueSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8YW55PlwiaW5wdXRbbmFtZT0nYmFzZW1lbnQnXTpjaGVja2VkXCIpICE9IG51bGwpIHtcclxuXHRcdHZhciBhbnN3ZXJCYXNlbWVudDogc3RyaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcig8YW55PlwiaW5wdXRbbmFtZT0nYmFzZW1lbnQnXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cdH0gZWxzZSB7IGFuc3dlckJhc2VtZW50ID0gXCJcIiB9XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoPGFueT5cImlucHV0W25hbWU9J3BpbGxhcnMnXTpjaGVja2VkXCIpICE9IG51bGwpIHtcclxuXHRcdHZhciBhbnN3ZXJQaWxsYXI6IHN0cmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoPGFueT5cImlucHV0W25hbWU9J3BpbGxhcnMnXTpjaGVja2VkXCIpLnZhbHVlO1xyXG5cdH0gZWxzZSB7IGFuc3dlclBpbGxhciA9IFwiXCIgfVxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKDxhbnk+XCJpbnB1dFtuYW1lPSdjb3ZlciddOmNoZWNrZWRcIikgIT0gbnVsbCkge1xyXG5cdFx0dmFyIGFuc3dlckNvdmVyOiBzdHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKDxhbnk+XCJpbnB1dFtuYW1lPSdjb3ZlciddOmNoZWNrZWRcIikudmFsdWU7XHJcblx0fSBlbHNlIHsgYW5zd2VyQ292ZXIgPSBcIlwiIH1cclxuXHJcblx0YXJyRm9ybS5wdXNoKGFuc3dlckJhc2VtZW50LCBhbnN3ZXJQaWxsYXIsIGFuc3dlckNvdmVyKTtcclxuXHJcblx0Y29uc3RyRGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XHJcblx0YmxvY2syLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG5cdGlubmVyRGl2KGFyckZvcm0sIG91dHB1dERpdik7XHJcblx0b3V0cHV0RGl2LmFwcGVuZChocilcclxufSk7XHJcblxyXG4vL9Ca0L3QvtC/0LrQsCDQtNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0YLQvtC6IFxyXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGxldCBhcnJMaW5lOiBBcnJheTxhbnk+ID0gW107XHJcblx0bGV0IGxpbmVGb3JtOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZUZvcm1cIik7XHJcblx0bGV0IG5ld0Zvcm0gPSBsaW5lRm9ybS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0bGV0IHN0YXJ0UG9pbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaXJzdFBvaW50c1wiKTtcclxuXHRsZXQgbGFzdFBvaW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Vjb25kUG9pbnRzXCIpO1x0XHJcblx0bGV0IGhyIDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcblxyXG5cdGdldFNlbGVjdGVkKHsgZWwxOiBzdGFydFBvaW50LCBlbDI6IGxhc3RQb2ludCwgYXJyOiBhcnJMaW5lIH0pO1xyXG5cclxuXHRsZXQgcGlsbGFyTnVtIDogbnVtYmVyID0gY2FsY1BpbGxhck51bShhcnJMaW5lKTtcdFxyXG5cdGFsbExpbmUucHVzaChhcnJMaW5lKTtcdFx0XHJcblx0b2JqTGluZS5hbGxwaWxsYXJOdW0gPSBvYmpMaW5lLmFsbHBpbGxhck51bSArIHBpbGxhck51bTtcclxuXHRvYmpMaW5lLmZlbmNlTGVuZ3RoID1vYmpMaW5lLmZlbmNlTGVuZ3RoICsgYXJyTGluZVsxXTtcclxuXHJcblx0dXBDbnQoKTtcclxuXHRpbm5lckRpdkxpbmUoYXJyTGluZSwgb3V0cHV0RGl2LCBjbnQpO1xyXG5cdG91dHB1dERpdi5hcHBlbmQoaHIpO1xyXG5cdGxpbmVGb3JtLnJlbW92ZSgpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhvYmpMaW5lKTtcdFxyXG5cdGFkZEJ0bi5hZnRlcihuZXdGb3JtKTtcdFxyXG59KVxyXG5mdW5jdGlvbiB1cENudCgpIHtjbnQrKzt9XHJcblxyXG4vL9Ca0L3QvtC/0LrQsCDRgNCw0YHRh9C40YLQsNGC0Ywg0L3QsCDQstGC0L7RgNC+0Lkg0YHRgtGA0LDQvdC40YbQtVxyXG5idG5Db21wdXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0YmxvY2syLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcblx0ZmluYWxDYWxjRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG5cdGlubmVyRGl2KGFyckZvcm0sINGBYWxjQ29udGVudERpdik7XHJcblx0c2hvd09iaihvYmpMaW5lLCDRgWFsY0NvbnRlbnREaXYpO1xyXG5cdNGBYWxjQ29udGVudERpdi5hcHBlbmQoaHIpO1xyXG5cclxuXHRyZWluZm9yY2VkQmFzZUN1bGMob2JqTGluZSk7XHJcbn0pOyIsImV4cG9ydCBmdW5jdGlvbiBzaG93T2JqKG9iajogYW55LCBtYWluRGl2OiBIVE1MRWxlbWVudCkge1xyXG5cdGxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRkaXYxLmlubmVyVGV4dCA9IGDQntCx0YnQtdC1INC60L7Qu9C70LjRh9C10YHRgtCy0L4g0YHRgtC+0LvQsdC+0LI6ICAke29iai5hbGxwaWxsYXJOdW19YDtcclxuXHRkaXYyLmlubmVyVGV4dCA9IGDQntCx0YnQsNGPINC00LvQuNC90L3QsCDQvtCz0YDQsNC20LTQtdC90LjRjzogICR7b2JqLmZlbmNlTGVuZ3RofWA7XHJcblx0bWFpbkRpdi5hcHBlbmRDaGlsZChkaXYxKTtcclxuXHRtYWluRGl2LmFwcGVuZENoaWxkKGRpdjIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVpbmZvcmNlZEJhc2VDdWxjIChvYmo6IGFueSkge1xyXG4gICAgbGV0IGZpbmFsT2JqIDoge1xyXG4gICAgICAgIGNvbmNyZXRlVm9sdW1lPyA6IG51bWJlcixcclxuICAgICAgICByZWluZm9yY2VtZW50MTI/IDogbnVtYmVyLFxyXG4gICAgICAgIHJlaW5mb3JjZW1lbnQ2PyA6IG51bWJlcixcclxuICAgIH0gPSB7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgbGV0IHZvbHVtZVBpbGxhciA6IG51bWJlciA9IChvYmouZnJlZXpEZXB0aCAqIDAuMTYgKiBvYmouYWxscGlsbGFyTnVtKTtcclxuICAgIGxldCBsZW5ndGhNaW51c1BpbGxhciA6IG51bWJlciA9IG9iai5mZW5jZUxlbmd0aCAtIChvYmouYWxscGlsbGFyTnVtKjAuNCk7ICAgXHJcbiAgICBsZXQgdm9sdW1lTGluZSA6IG51bWJlciA9IGxlbmd0aE1pbnVzUGlsbGFyICogMC4xNjsgICAgXHJcbiAgICBsZXQgYWxsQ29uY3JldGVWb2x1bWUgOiBudW1iZXIgPSArKCh2b2x1bWVMaW5lICsgdm9sdW1lUGlsbGFyKS50b0ZpeGVkKDIpKTtcclxuICAgIGxldCByZWluZm9yY2VtZW50MTIgOiBudW1iZXIgPSArKCgobGVuZ3RoTWludXNQaWxsYXIgKyAob2JqLmFsbHBpbGxhck51bSpvYmouZnJlZXpEZXB0aCkpKjQpLnRvRml4ZWQoMikpO1xyXG4gICAgbGV0IHJlaW5mb3JjZW1lbnQ2IDogbnVtYmVyID0gKygoKGxlbmd0aE1pbnVzUGlsbGFyICsgKG9iai5hbGxwaWxsYXJOdW0qb2JqLmZyZWV6RGVwdGgpKSoxLjU2LzAuMykudG9GaXhlZCgyKSk7XHJcbiAgICBmaW5hbE9iai5jb25jcmV0ZVZvbHVtZSA9IGFsbENvbmNyZXRlVm9sdW1lO1xyXG4gICAgZmluYWxPYmoucmVpbmZvcmNlbWVudDEyID0gcmVpbmZvcmNlbWVudDEyO1xyXG4gICAgZmluYWxPYmoucmVpbmZvcmNlbWVudDYgPSByZWluZm9yY2VtZW50NjsgICAgXHJcbiAgICBjb25zb2xlLmxvZyAoYFxyXG4gICAg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSDQvtCx0YrQtdC8INCx0LXRgtC+0L3QsCAke2FsbENvbmNyZXRlVm9sdW1lfSDQvDNcclxuICAgINC60L7Qu9C40YfQtdGB0YLQstC+INCw0YDQvNCw0YLRg9GA0Ysg4oyAMTIgJHtyZWluZm9yY2VtZW50MTJ9ICDQvC/Qv1xyXG4gICAg0LrQvtC70LjRh9C10YHRgtCy0L4g0LDRgNC80LDRgtGD0YDRiyDijIA2ICR7cmVpbmZvcmNlbWVudDZ9ICDQvC/Qv2ApXHJcbiAgICByZXR1cm4gZmluYWxPYmo7XHJcbn0iLCIvKlxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkUmFkaW8oZGl2Q2FyZDogSFRNTERpdkVsZW1lbnQsIGFycjogQXJyYXk8YW55PiwgaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKTtcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLWNvbnRyb2wnLCAnY3VzdG9tLXJhZGlvJyk7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBjYXJkUmFkaW8ke2l9LSR7YXJyW2ldLnR5cGV9YCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGAke2FycltpXS50eXBlfWApO1xyXG4gICAgLy9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHthcnJbaV0ubmFtZX1gKTtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jaGVjay1sYWJlbFwiKTtcclxuICAgIC8vbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGBjYXJkUmFkaW8ke2l9LSR7YXJyW2ldLnR5cGV9YCk7XHJcblxyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGRpdkZvb3Rlci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgZGl2Q2FyZC5hcHBlbmRDaGlsZChkaXZGb290ZXIpO1xyXG59Ki9cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkUmFkaW8oZGl2Q2FyZDogSFRNTERpdkVsZW1lbnQsIGFycjogQXJyYXk8YW55PiwgaTogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1mb290ZXInKTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjdXN0b20tY29udHJvbCcsICdjdXN0b20tcmFkaW8nKTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2FyZFJhZGlvJHtpfS0ke2FycltpXS50eXBlfWApO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgJHthcnJbaV0udHlwZX1gKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2FycltpXS5uYW1lfWApO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1jb250cm9sLWlucHV0XCIpO1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tY29udHJvbC1sYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgY2FyZFJhZGlvJHtpfS0ke2FycltpXS50eXBlfWApO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBkaXZGb290ZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcclxufVxyXG4iXX0=
