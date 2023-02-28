const counterE1 = document.querySelector('.counter');
const barE1 = document.querySelector('.loading-bar-front');

// counterE1.innerText = '20%';
// to update percent
let idex= 0;

updateNum()

function updateNum(){
    counterE1.innerText = idex + "%";
    barE1.style.width = idex + "%";
    idex++
    if(idex<101){
        setTimeout(updateNum, 20);
    }
}