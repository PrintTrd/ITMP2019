fortuneBank = [
"ลองยิ้มให้กระจกสิ แล้ววันนี้จะพบเรื่องดีๆแน่นอน",
"สีนำโชคของวันนี้คือ สีชมพู",
"วันนี้อากาศดี ลองออกไปเดินเล่นดูบ้าง จะพบสิ่งที่เฝ้ารอ",
"ลองหากิจกรรมใหม่ๆทำ แล้วจะร่าเริงขึ้นได้แน่",
"มองหากำลังใจอยู่ใช่ไหม ลองเริ่มจากการให้กำลังใจคนที่คุณพบวันนี้ดูสิ",
"เลขนำโชควันนี้คือเลข 8",
"บางเรื่องก็ปล่อยวางไปบ้าง จะสบายใจขึ้นเป็นกองเลย"
];

day = ["จัทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"];

setTimeout(function(){
    number = prompt("คุณเกิดวันอะไร? จันทร์-1 อังคาร-2 พุธ-3 พฤหัส-4 ศุกร์-5 เสาร์-6 อาทิตย์-7");
    while (number > 7 || number < 1) {
        number = prompt("คุณเกิดวันอะไร? จันทร์-1 อังคาร-2 พุธ-3 พฤหัส-4 ศุกร์-5 เสาร์-6 อาทิตย์-7");
        if (number > 0 && number < 8) {
            break;
        }
        else {
            alert("โปรดใส่หมายเลข 1-7");
        }
    }
}, 200);

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function(){
        getFortune();
    }, 2500);
}

function play2(){
    cookie2.classList.remove("cookie-show");
    cookie1.classList.remove("cookie-hide");
    fortune.style.opacity = 0;
    setTimeout(() => {
        cookie2.classList.add("cookie-hide");
        cookie1.classList.add("cookie-show");
    }, 10);
    setTimeout(() => {
        removeClassList();
    }, 2000);

    setTimeout(function(){
        number = prompt("คุณเกิดวันอะไร? จันทร์-1 อังคาร-2 พุธ-3 พฤหัส-4 ศุกร์-5 เสาร์-6 อาทิตย์-7");
        while (number > 7 || number < 1) {
            number = prompt("คุณเกิดวันอะไร? จันทร์-1 อังคาร-2 พุธ-3 พฤหัส-4 ศุกร์-5 เสาร์-6 อาทิตย์-7");
            if (number > 0 && number < 8) {
                break;
            }
            else {
                alert("โปรดใส่หมายเลข 1-7");
            }
        }
    }, 2100);
}

function getFortune(){
    // rand = Math.floor(Math.random()*fortuneBank.length);
    // fortune.innerText = fortuneBank[rand];

    fortune.innerText = "สำหรับคนเกิดวัน"+day[number-1]+": "+fortuneBank[number-1];
    fortune.style.opacity = 1;
    fortune.style.top = "96px";
}

function removeClassList() {
    cookie1.classList.remove("cookie-hide");
    cookie2.classList.remove("cookie-show");
    cookie2.classList.remove("cookie-hide");
    cookie1.classList.remove("cookie-show");
    fortune.style.opacity = 0;
}