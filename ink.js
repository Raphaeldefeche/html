
let nextArr = document.getElementById('prec')
let prevArr = document.getElementById('suiv')
let bannerDom = document.querySelector('.banner')
let contentDom = document.querySelector('.banner .content')

let timeRunning = 6000;
let timeNextAuto = 7000;

let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextArr.click()
}, timeNextAuto)

nextArr.onclick = function() {
    showInk('next')
    console.log("coucou")
}

prevArr.onclick = function() {
    showInk('prev')
    console.log("wesh")
}

function showInk(ink) {
    if (ink === 'next') {
        bannerDom.classList.remove('prev');
        bannerDom.classList.add('next')
    }else {
        bannerDom.classList.remove('next');
        bannerDom.classList.add('prev')
    }

    // clearTimeout(runTimeOut);
    // runTimeOut = setTimeout(() =>{
    //     bannerDom.classList.remove('prev');
    //     bannerDom.classList.remove('next');
    // }, timeRunning)
}