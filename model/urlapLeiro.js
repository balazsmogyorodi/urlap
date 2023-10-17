export const urlapLeiro = {
    nev:{
        megjelenes:"Név",
        tipus: "text",
        value: "",
        placeholder: "Valaki vagyok",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
    },
    szulEv:{
        megjelenes:"Születési év",
        tipus: "number",
        value: "2000",
        regex: {
            min:1000,
            max:2023
        },
        validalas: "Négy szám jegyű és 2023-ig"
    },


}