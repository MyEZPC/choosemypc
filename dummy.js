//Used for references

// v1.0 // randomize and check if pcpart compatible or not //https://bost.ocks.org/mike/shuffle/ //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
// function shuffle(pcparts){
//     var cpuCurrentIndex = pcparts.cpu.length, temporaryValue, randomIndex;

//     //while there remain pcparts to randomize
//     while (0 !== cpuCurrentIndex){
//         //pick a remaining pcpart
//         randomIndex = Math.floor(Math.random() * cpuCurrentIndex);
//         cpuCurrentIndex -= 1;

//         //and swap it with the current element
//         temporaryValue = pcparts.cpu[cpuCurrentIndex];
//         pcparts.cpu[cpuCurrentIndex] = pcparts.cpu[randomIndex];
//         pcparts.cpu[randomIndex] = temporaryValue;
//     }
//     return pcparts.cpu;
// }

// // display the combined pcpart
// pcparts = shuffle(pcparts);
// console.log(pcparts);

// v1.1 // randomize cpu 
// function shuffleCPU(pcparts){
//     for (var i = pcparts.cpu.length - 1; i > 0; i--){
//         var cpuCurrentIndex = Math.floor(Math.random() * (i+1));
//         var temporaryValue = pcparts.cpu[i];
//         pcparts.cpu[i] = pcparts.cpu[cpuCurrentIndex];
//         pcparts.cpu[cpuCurrentIndex] = temporaryValue;
//     }
//     return pcparts.cpu;
// }

// //randomize mobo based on cpu 

// // display the combined pcpart
// pcparts = shuffleCPU(pcparts);
// console.log(pcparts);

// function generateMobo(pcparts){
//     for (var i = pcparts.mobo.length - 1; i > 0; i--){
//         moboRandomize = Math.floor(Math.random() * (i+1));
//         moboCurrentIndex = pcparts.mobo[moboRandomize];
//         return moboCurrentIndex;
//     }
// }