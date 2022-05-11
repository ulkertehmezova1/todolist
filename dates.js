const nw = new Date();
// console.log(nw);
// console.log('GetFullYear: ',nw.getFullYear());
// console.log('getMonth',nw.getMonth());
// console.log('getdate',nw.getDate());
// console.log('getDay',nw.getDay());
// console.log('GetHours',nw.getHours());
// console.log('GetMinutes',nw.getMinutes());
// console.log('GetSeconds',nw.getSeconds());

// console.log('timestamps',nw.getTime());

// console.log(nw.toDateString());
// console.log(nw.toTimeString());
// console.log(nw.toLocaleString());

const before=new Date('February 1 2019 7:30:59');
console.log(before.getTime(),nw.getTime());
const diff=nw.getTime()-before.getTime();
console.log(diff);

const mins=Math.round(diff/1000/60);
const hours=Math.round(mins/60);
const days=Math.round(mins/24);
console.log(mins,hours,days);

const timestamps=15264358175;
console.log(new Date(timestamps));