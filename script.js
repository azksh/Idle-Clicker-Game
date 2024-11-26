let money = 0;
let total = 0;
let jumlah = 0;
let clickers = 0;
let clickerCost = 50;
let Cost = 50;
let harga =10;



const ice = document.querySelector('.ice');
const moneyDisplay = document.querySelector('#money');
const totalDisplay = document.querySelector('#total');
const clickersDisplay = document.querySelector('#clickers');
const buyClickerButton = document.querySelector('#buy-clicker');
const cabang = document.querySelector('#cabang');

function jualcone(x){
if(x=="cone"){
    harga=10
}
if(x=="cup"){
    harga=20
}
if(x=="mangkok"){
    harga=30
}
}

ice.addEventListener('click', function() {
    money += harga +(total*harga);
    playAudio() ;
    if (money>100){
        document.getElementById("cup").disabled=false;
        document.getElementById("cup").style.backgroundColor="pink";
    }
    if (money>200){
        document.getElementById("mangkok").disabled=false;
        document.getElementById("mangkok").style.backgroundColor="pink";

    }
    updateMoneyDisplay();
});

buyClickerButton.addEventListener('click', function() {
    if (money >= clickerCost) {
        money -= clickerCost;
        clickers += 1;
        updateMoneyDisplay();
        clickerCost = Math.round(clickerCost + 50); 
        updateclickersDisplay();
        buyClickerButton.textContent = `Buy Auto-Clicker (${clickerCost}K)`;
    }
    else {
        alert("Uang Anda Tidak Cukup")
    }
});

cabang.addEventListener('click', function() {
    if (money >= Cost) {
        money -= Cost;
        total += 1;
        Cost = Math.round(Cost * 2); 
        updatetotalDisplay();
        cabang.innerText = `Tambah Toko Cabang (${Cost}K)`;

    }
    else {
        alert("Uang Anda Tidak Cukup")
    }
});

function updatetotalDisplay() {
    totalDisplay.textContent = total;
    cabang.innerText = `Tambah Toko Cabang (${Cost}K)`;
}

setInterval(function() {
    money += clickers;
    updateMoneyDisplay();
}, 1000);

function updateMoneyDisplay() {
    moneyDisplay.textContent = money;
    buyClickerButton.textContent = `Buy Auto-Clicker (${clickerCost}K)`;
}
function updateclickersDisplay() {
    clickersDisplay.textContent = clickers;
    buyClickerButton.textContent = `Buy Auto-Clicker (${clickerCost}K)`;
}
