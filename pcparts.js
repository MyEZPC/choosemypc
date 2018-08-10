var pcparts = {
    "cpu": [{
        "id": 1,
        "processor": "Intel Core i7-8700K",
        "socket": "LGA1151"
    }, {
        "id": 2,
        "processor": "Intel Core i5-8600K",
        "socket": "LGA1151"
    }, {
        "id": 3,
        "processor": "AMD Ryzen 7 2700X",
        "socket": "AM4"
    }, {
        "id": 4,
        "processor": "AMD Ryzen 5 1600",
        "socket": "AM4"
    }
    ],
    "mobo": [{
        "id": 1,
        "manufacturer": "Asus",
        "motherBoard": "Asus ROG STRIX Z370-E GAMING",
        "moboSize": "ATX",
        "ramSpec": {
            "type": "DDR4",
            "frequency": ["2133", "2400", "2666", "2800", "3000", "3200", "3300", "3333", "3400", "3466", "3600", "3733", "3866", "4000"]
        },
        "ramPin": "288-pin DIMM",
        "maxRamSlots": "4",
        "socket": "LGA1151"
    }, {
        "id": 2,
        "manufacturer": "Asus",
        "motherBoard": "Asus STRIX B350-F GAMING",
        "moboSize": "ATX",
        "ramSpec": {
            "type": "DDR4",
            "frequency": ["2133", "2400", "2666", "2933", "3200"]
        },
        "ramPin": "288-pin DIMM",
        "maxRamSlots": "4",
        "socket": "AM4"
    }, {
        "id": 3,
        "manufacturer": "MSI",
        "motherBoard": "MSI B350M GAMING PRO",
        "moboSize": "ATX",
        "ramSpec": {
            "type": "DDR4",
            "frequency": ["1866", "2133", "2400", "2666", "2933", "3200"]
        },
        "ramPin": "288-pin DIMM",
        "maxRamSlots": "2",
        "socket": "AM4"
    }, {
        "id": 4,
        "manufacturer": "Gigabyte",
        "motherBoard": "GIGABYTE GA-B250M-DS3H",
        "moboSize": "Micro ATX",
        "ramSpec": {
            "type": "DDR4",
            "frequency": ["2133", "2400"]
        },
        "ramPin": "288-pin DIMM",
        "maxRamSlots": "4",
        "socket": "LGA1151"
    }, {
        "id": 5,
        "manufacturer": "MSI",
        "motherBoard": "MSI B350M PRO-VD PLUS",
        "moboSize": "Micro ATX",
        "ramSpec": {
            "type": "DDR4",
            "frequency": ["1866", "2133", "2400", "2666", "2933", "3200"]
        },
        "ramPin": "288-pin DIMM",
        "maxRamSlots": "4",
        "socket": "LGA1151"
    }
    ],
    "memory": [{
        "id": 1,
        "manufacturer": "Corsair",
        "ram": "Corsair Vengeance LPX x2",
        "ramSpec": {
            "type": "DDR4",
            "frequency": "3000"
        },
        "ramPin": "288-pin DIMM",
        "size": "2x8gb"
    }, {
        "id": 2,
        "manufacturer": "Corsair",
        "ram": "Corsair Vengeance LPX",
        "ramSpec": {
            "type": "DDR4",
            "frequency": "2400"
        },
        "ramPin": "288-pin DIMM",
        "size": "1x8gb"
    }, {
        "id": 3,
        "manufacturer": "G.Skill",
        "ram": "G.Skill Ripjaws X Series",
        "ramSpec": {
            "type": "DDR3",
            "frequency": "1600"
        },
        "ramPin": "240-pin DIMM",
        "size": "2x8gb"
    }, {
        "id": 4,
        "manufacturer": "Kingston",
        "ram": "Kingston HyperX Fury Black",
        "ramSpec": {
            "type": "DDR4",
            "frequency": "2133"
        },
        "ramPin": "288-pin DIMM",
        "size": "2x4gb"
    }]
};


function pickCpu(pcparts) {
    //randomize cpu output only 1 //function pickCpu
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
            trueMobo = trueMobo.concat(pcparts.mobo[i]);
        }
    }
    //randomize mobo output only 1 //function pickMobo
    for (var i = trueMobo.length - 1; i > -1; i--) {
        var moboRandomize = Math.floor(Math.random() * (i + 1));
        var temp = trueMobo[i];
        trueMobo[i] = trueMobo[moboRandomize];
        trueMobo[moboRandomize] = temp;
        var moboCurrentIndex = trueMobo[moboRandomize];
    }
    console.log(moboCurrentIndex);

    //list a list of memory thats compatible based on the mobo //function listRam
    var memoryCompatible = moboCurrentIndex;
    var trueMemory = [];
    for (var i = pcparts.memory.length - 1; i > -1; i--) {
        if (memoryCompatible.ramSpec.frequency.indexOf(pcparts.memory[i].ramSpec.frequency) != -1 && memoryCompatible.ramSpec.type === pcparts.memory[i].ramSpec.type && memoryCompatible.ramPin === pcparts.memory[i].ramPin) {
            trueMemory = trueMemory.concat(pcparts.memory[i]);
        }
    }
    //randomize memory output only 1 //function pickRam
    for (var i = trueMemory.length - 1; i > -1; i--) {
        var memoryRandomize = Math.floor(Math.random() * (i + 1));
        var temp = trueMemory[i];
        trueMemory[i] = trueMemory[memoryRandomize];
        trueMemory[memoryRandomize] = temp;
        var memoryCurrentIndex = trueMemory[memoryRandomize];
    }
    console.log(memoryCurrentIndex);
}

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


