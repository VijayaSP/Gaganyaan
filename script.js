let dit = document.querySelector("#day");
let hit = document.querySelector("#hour");
let mit = document.querySelector("#min");
let sit = document.querySelector("#sec");
let ctd = () => {
    let sdate=new Date("21 Oct 2023 07:00:00 ");
    let cdate=new Date().getTime();
    let caldate=sdate-cdate;
    let d=Math.floor(caldate/(1000*60*60*24));
    let h=Math.floor(caldate/(1000*60*60))%24;
    let m=Math.floor(caldate/(1000*60))%60;
    let s=Math.floor(caldate/1000)%60;
    document.getElementById("day").innerHTML = d+" :";
    document.getElementById("hour").innerHTML = h+" :";
    document.getElementById("min").innerHTML = m+" :";
    document.getElementById("sec").innerHTML = s;
}
ctd()
setInterval(ctd,1000)
