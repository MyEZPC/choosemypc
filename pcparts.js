var pcparts = {
                "cpu" : [{
                    "id" : 1,
                    "processor" : "Intel Core i7-8700K",
                    "socket" : "LGA1151"
                },{
                    "id" : 2,
                    "processor" : "Intel Core i5-8600K",
                    "socket" : "LGA1151"
                },{
                    "id" : 3,
                    "processor" : "AMD Ryzen 70 2700X",
                    "socket" : "AM4"
                },{
                    "id" : 4,
                    "processor" : "AMD Ryzen 5 1600",
                    "socket" : "AM4"
                }
                        ],
                "mobo" :[{
                    "id" : 1,
                    "motherBoard" : "Asus ROG STRIX Z370-E GAMING",
                    "socket" : "LGA1151"
                },{
                    "id" : 2,
                    "motherBoard" : "Asus STRIX B350-F GAMING",
                    "socket" : "AM4"
                },{
                    "id" : 3,
                    "motherBoard" : "MSI B350M GAMING PRO",
                    "socket" : "AM4"
                },{
                    "id" : 4,
                    "motherBoard" : "GIGABYTE GA-B250M-DS3H",
                    "socket" : "LGA1151"
                },{
                    "id" : 5,
                    "motherBoard" : "MSI 15GGB250M-DS3H",
                    "socket" : "LGA1151"
                }
                        ]
            };

//randomize cpu output only 1 //function pickCpu
function pickCpu(pcparts) {
    for (var i = pcparts.cpu.length - 1; i > 0; i--) {
        var cpuRandomize = Math.floor(Math.random() * (i + 1));
        var cpuCurrentIndex = pcparts.cpu[cpuRandomize];
        console.log(cpuCurrentIndex);
        break;
    }

    // list a list of mobo thats compatible based on the cpu //function listMobo
    var cpuCompatible = cpuCurrentIndex;
    var trueMobo = [];
    for (var i = pcparts.mobo.length - 1; i > -1; i--) {
        if (cpuCompatible.socket === pcparts.mobo[i].socket) {
            var trueMobo = trueMobo.concat(pcparts.mobo[i]);
        }
    }
    //randomize mobo output only 1[unfixed] //function pickMobo
    for (var i = trueMobo.length - 1; i > -1; i--) {
        var moboRandomize = Math.floor(Math.random() * (i + 1));
        var temp = trueMobo[i];
        trueMobo[i] = trueMobo[moboRandomize];
        trueMobo[moboRandomize] = temp;
        var moboCurrentIndex = trueMobo[moboRandomize];
    }
    console.log(moboCurrentIndex);
}

//list a list of ram thats compatible based on the mobo //function listRam
//randomize ram output only 1 //function pickRam
//randomize gpu output only 1 //function pickGpu
//randomize storage output only 1 //function pickStorage
//list a list of cpucooler thats compatible based on cpu //function listCpuCooler
//randomize cpucooler output only 1 //function pickCooler
//randomize power supply //function pickPsu
//list a list of casing thats compatible based on mobo //function listCase
//randomize casing //function pickCase


//display back all these information //function displayRig
displayCPU = pickCpu(pcparts);

//call back all these informations in one main function 


