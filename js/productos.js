/* Orden de Id's
Plc Siemens 1-99
Plc Delta 100-199
Plc Ge 200-299
Reserva para nuevas marcas PLC 300-999

Modulos
Siemens Di 1000-1049
Siemens Do 1050-1099
Delta Di 1100-1149
Delta Do 1150-1199
Ge Di 1200-1249
Ge Do 1250-1299
Reserva para nuevos modulos de otras marcas 1300-1999
*/
let allHardware=[
    //Plc Siemens
    {
        id : 1,
        type : "Plc",
        company : "Siemens",
        name : "CPU 1500",
        spectrum : "Alta",
        price : 2000,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/1500.png",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 2,
        type : "Plc",
        company : "Siemens",
        name : "CPU 1200",
        spectrum : "Media",
        price : 1500,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/1200.jpeg",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 3,
        type : "Plc",
        company : "Siemens",
        name : "CPU 400",
        spectrum : "Baja",
        price : 800,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/400.jpeg",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 4,
        type : "Plc",
        company : "Siemens",
        name : "CPU 300",
        spectrum : "Baja",
        price : 700,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/300.jpg",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Plc Delta
    {
        id : 100,
        type : "Plc",
        company : "Delta",
        name : "CPU SE",
        spectrum : "Baja",
        price : 500,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/se.jpg",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 101,
        type : "Plc",
        company : "Delta",
        name : "CPU SV2",
        spectrum : "Media",
        price : 700,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/sv2.jpg",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Plc Ge
    {
        id : 200,
        type : "Plc",
        company : "Ge",
        name : "CPU Versamax",
        spectrum : "Media",
        price : 1500,
        description: "Un gran PLC para tu proyecto",
        image : "./assets/images/versamax.jpg",
        quantity : 0,
        memory : 256,
        protocol: ["Modbus", " RS-485", " Ethernet"],
        di : 0,
        diTransType: "none",
        diType : "none",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },


//**************************** Modulos ****************************

    //Di Siemens
    {
        id : 1000,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI8",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 8,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1001,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI16",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 16,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1002,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI32",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 32,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Do Siemens
    {
        id : 1050,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO8",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 8,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1051,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO16",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 16,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1052,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO32",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 32,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Di Delta
    {
        id : 1100,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI8",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 8,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1101,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI16",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 16,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1102,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI32",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 32,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Do Delta
    {
        id : 1150,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDo8",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 8,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1151,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDo16",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 16,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1152,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO32",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 32,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Di Ge
    {
        id : 1200,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI8",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 8,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1201,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI16",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 16,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1202,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDI32",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 32,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 0,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    //Do Ge
    {
        id : 1250,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO8",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 8,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1251,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO16",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 16,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    },
    {
        id : 1252,
        type : "Modulo",
        company : "Siemens",
        name : "ModuloDO32",
        price : 1500,
        image : "none",
        quantity : 0,
        di : 0,
        diTransType: "none",
        diType : "relé",
        diFast : 0,
        do : 32,
        doTransType: "none",
        doType : "none",
        doFast : 0,
        ai : 0,
        aiType: ["none"],
        aiRange: ["none"],
        ao : 0,
        aoType: ["none"],
        aoRange: ["none"],
    }
]