// var $ = function(sel){
//     console.log("The Selector is", sel);
// }

// // ex 1
var $ = function (sel) {
    var elem = document.querySelector(sel);
    return elem;
}

// ex 2----
// var $ = function(sel){
//     var elem = document.querySelector(sel);

//     var text = function(){
//         console.log("this text will change");
//     }
//     return text;
// }
// ---
var $ = function (sel) {
    var elem = document.querySelectorAll(sel);
    // textContent: sel;
    // var helperFunction = function(){
    //     console.log("more texts");

    var text = function (str) {
        // console.log("this text will change");
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = str;
        }
    }
    var addClass = function (className) {
        console.log("this works");
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }
    var removeClass = function (className) {
        console.log("removeClass works");
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }
    
    var on = function (action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }

    var toggleClass = function (className) {
        for (var i = 0; i < elem.length; i++){
            if (elem[i].className.includes(className)){
                console.log("toggle off");
                elem[i].classList.remove(className);
            }
            else {
                console.log("toggle on");
                elem[i].classList.add(className);
            }
        }
    }



    var html = function (newHTML) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = newHTML;
        }
    }
    var publicAPI = {
        element: elem,
        // elemClass: elementClass,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        html: html,
        toggleClass: toggleClass
    }
    return publicAPI;
}