
const $hour = document.getElementById("hour");
const $minute = document.getElementById("minute");
const $second = document.getElementById("second");

setInterval(() => {
   let time = new Date();
   let hour = time.getHours();
   let minute = time.getMinutes();
   let second = time.getSeconds();

   $hour.innerHTML = hour;
   $minute.innerHTML = minute;
   $second.innerHTML = second;

}, 1000)
let time = new Date();
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());



//setInterval(() => {
  // if (second > 59) {
     // second = 0;
      //second++;
   //console.log(second);
   //$second.innerHTML = second;
  // }

//}, 100);








 



