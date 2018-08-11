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
    }
    ],
    "gpu": [{
        "id": 1,
        "manufacturer": "MSI",
        "videoCard": "MSI GeForce GTX 1060 6GT OCV1",
        "vRam": "6gb",
        "memoryType": "GDDR5",
        "coreClock": "1.61GHz"
    }, {
        "id": 2,
        "manufacturer": "Gigabyte",
        "videoCard": "Gigabyte GV-N107TWF2-8GD",
        "vRam": "8gb",
        "memoryType": "GDDR5",
        "coreClock": "1.63GHz"
    }, {
        "id": 3,
        "manufacturer": "Gigabyte",
        "videoCard": "GeForce GTX 1080 8GB WINDFORCE OC 8G Video Card",
        "vRam": "8gb",
        "memoryType": "GDDR5X",
        "coreClock": "1.66GHz"
    }, {
        "id": 4,
        "manufacturer": "Asus",
        "videoCard": "Asus ROG-STRIX-RX580-O8G-GAMING",
        "vRam": "8gb",
        "memoryType": "GDDR5",
        "coreClock": "1.26GHz"
    }, {
        "id": 5,
        "manufacturer": "EVGA",
        "videoCard": "GeForce GTX 970 4GB Superclocked ACX 2.0",
        "vRam": "4gb",
        "memoryType": "GDDR5",
        "coreClock": "1.17GHz"
    }
    ],
    "storage": [{
        "id": 1,
        "manufacturer": "Western Digital",
        "drive": "Caviar Blue 1TB 3.5 7200RPM Internal Hard Drive",
        "type": "HDD",
        "interface": "SATA 6 Gb/s",
        "capacity": "1tb"
    }, {
        "id": 2,
        "manufacturer": "Seagate",
        "drive": "Barracuda 2TB 3.5 7200RPM Internal Hard Drive",
        "type": "HDD",
        "interface": "SATA 6 Gb/s",
        "capacity": "2tb"
    }, {
        "id": 3,
        "manufacturer": "Samsung",
        "drive": "850 EVO-Series 500GB 2.5 Solid State Drive",
        "type": "SSD",
        "interface": "SATA 6 Gb/s",
        "capacity": "500gb"
    }, {
        "id": 4,
        "manufacturer": "Samsung",
        "drive": "970 Evo 500GB M.2-2280 Solid State Drive",
        "type": "SSD",
        "interface": "M.2",
        "capacity": "500gb"
    }
    ],
    "cpuCooler": [{
        "id": 1,
        "cooler": "Cooler Master Hyper 212 EVO",
        "waterCooled": "no",
        "supportedSocket": ["AM2", "AM2+", "AM3", "AM3+", "AM4", "FM1", "FM2", "FM2+", "LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1366", "LGA1366", "LGA2011", "LGA2011-3", "LGA2066", "LGA775"],
        "minFanRPM": "600",
        "maxFanRPM": "2000"
    }, {
        "id": 2,
        "cooler": "Corsair H100i v2",
        "waterCooled": "yes",
        "supportedSocket": ["AM2", "AM2+", "AM3", "AM3+", "AM4", "FM1", "FM2", "FM2+", "LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1366", "LGA2011", "LGA2011-3", "LGA2066"],
        "minFanRPM": "",
        "maxFanRPM": "2435"
    }, {
        "id": 3,
        "cooler": "NZXT Kraken X62 Rev 2",
        "waterCooled": "yes",
        "supportedSocket": ["AM2", "AM2+", "AM3", "AM3+", "AM4", "FM1", "FM2", "FM2+", "LGA1150", "LGA1151", "LGA1155", "LGA1156", "LGA1366", "LGA2011", "LGA2011-3", "LGA2066", "TR4"],
        "minFanRPM": "500",
        "maxFanRPM": "1800"
    }, {
        "id": 4,
        "cooler": "CRYORIG H7",
        "waterCooled": "no",
        "supportedSocket": ["AM2", "AM2+", "AM3", "AM3+", "AM4", "FM1", "FM2", "FM2+", "LGA1150", "LGA1151", "LGA1155", "LGA1156"],
        "minFanRPM": "330",
        "maxFanRPM": "1600"
    }
    ],
    "psu": [{
        "id": 1,
        "manufacturer": "EVGA",
        "powerSupply": "EVGA SuperNOVA 650",
        "wattage": "650W",
        "modular": "Full",
        "efficiency": "80+ Gold",
        "type": "ATX"
    }, {
        "id": 2,
        "manufacturer": "Corsair",
        "powerSupply": "Corsair CX550M",
        "wattage": "550W",
        "modular": "Semi",
        "efficiency": "80+ Bronze",
        "type": "ATX"
    }, {
        "id": 3,
        "manufacturer": "Corsair",
        "powerSupply": "Corsair HX1000i",
        "wattage": "1000W",
        "modular": "Full",
        "efficiency": "80+ Platinum",
        "type": "ATX"
    }, {
        "id": 4,
        "manufacturer": "Corsair",
        "powerSupply": "Corsair TX550M Gold",
        "wattage": "550W",
        "modular": "Semi",
        "efficiency": "80+ Gold",
        "type": "ATX"
    }
    ],
    "casing": [{
        "id": 1,
        "manufacturer": "NZXT",
        "case": "NZXT S340 (Black/Red)",
        "type": "ATX Mid Tower",
        "frontUSB3": "yes",
        "moboCompatibility": ["ATX", "Micro ATX", "Mini ITX"]
    }, {
        "id": 2,
        "manufacturer": "Cougar",
        "case": "Cougar MX330",
        "type": "ATX Mid Tower",
        "frontUSB3": "yes",
        "moboCompatibility": ["ATX", "Micro ATX", "Mini ITX"]
    }, {
        "id": 3,
        "manufacturer": "Phanteks",
        "case": "Phanteks Enthoo Pro M Tempered Glass (Black)",
        "type": "ATX Mid Tower",
        "frontUSB3": "yes",
        "moboCompatibility": ["ATX", "Micro ATX", "Mini ITX"]
    }, {
        "id": 4,
        "manufacturer": "Thermaltake",
        "case": "Thermaltake Core V21",
        "type": "MicroATX Mini Tower",
        "frontUSB3": "yes",
        "moboCompatibility": ["Micro ATX", "Mini ITX"]
    }, {
        "id": 5,
        "manufacturer": "Fractal Design",
        "case": "Fractal Design Define R6 Black TG",
        "type": "ATX Mid Tower",
        "frontUSB3": "yes",
        "moboCompatibility": ["ATX", "EATX", "Micro ATX", "Mini ITX"]
    }
    ]
};

function pickCpu(pcparts) {
    //randomize cpu output only 1 //function pickCpu
    for (var i = pcparts.cpu.length - 1; i > -1; i--) {
        var cpuRandomize = Math.floor(Math.random() * (i + 1));
        var cpuCurrentIndex = pcparts.cpu[cpuRandomize];
        break;
    }
    console.log(cpuCurrentIndex);

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

    //randomize gpu output only 1 //function pickGpu
    for (var i = pcparts.gpu.length - 1; i > -1; i--) {
        var gpuRandomize = Math.floor(Math.random() * (i + 1));
        var gpuCurrentIndex = pcparts.gpu[gpuRandomize];
        break;
    }
    console.log(gpuCurrentIndex);

    //randomize storage output only 1 //function pickStorage
    for (var i = pcparts.storage.length - 1; i > -1; i--) {
        var storageRandomize = Math.floor(Math.random() * (i + 1));
        var storageCurrentIndex = pcparts.storage[storageRandomize];
        break;
    }
    console.log(storageCurrentIndex);

    //list a list of cpucooler thats compatible based on mobo //function listCpuCooler
    var coolerCompatible = cpuCurrentIndex;
    var trueCooler = [];

    for (var i = pcparts.cpuCooler.length - 1; i > -1; i--) {
        if (pcparts.cpuCooler[i].supportedSocket.indexOf(coolerCompatible.socket) != -1) {
            trueCooler = trueCooler.concat(pcparts.cpuCooler[i]);
        }
    }

    //randomize cpucooler output only 1 //function pickCooler
    for (var i = trueCooler.length - 1; i > -1; i--) {
        var coolerRandomize = Math.floor(Math.random() * (i + 1));
        var temp = trueCooler[i];
        trueCooler[i] = trueCooler[coolerRandomize];
        trueCooler[coolerRandomize] = temp;
        var coolerCurrentIndex = trueCooler[coolerRandomize];
    }
    console.log(coolerCurrentIndex);

    //randomize power supply //function pickPsu
    for (var i = pcparts.psu.length - 1; i > -1; i--) {
        var psuRandomize = Math.floor(Math.random() * (i + 1));
        var psuCurrentIndex = pcparts.psu[storageRandomize];
        break;
    }
    console.log(psuCurrentIndex);

    //list a list of casing thats compatible based on mobo //function listCase
    var caseCompatible = moboCurrentIndex;
    var trueCase = [];

    for (var i = pcparts.casing.length - 1; i > -1; i--) {
        if (pcparts.casing[i].moboCompatibility.indexOf(caseCompatible.moboSize) != -1) {
            trueCase = trueCase.concat(pcparts.casing[i]);
        }
    }

    //randomize casing //function pickCase
    for (var i = trueCase.length - 1; i > -1; i--) {
        var caseRandomize = Math.floor(Math.random() * (i + 1));
        var temp = trueCase[i];
        trueCase[i] = trueCase[caseRandomize];
        trueCase[caseRandomize] = temp;
        var caseCurrentIndex = trueCase[caseRandomize];
    }
    console.log(caseCurrentIndex);
}

//display back all these information //function displayRig
displayCPU = pickCpu(pcparts);


