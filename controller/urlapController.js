import UrlapModel from "../model/urlapModel.js";
import UrlapView from "../view/urlapVIew.js";

class UrlapController {
    constructor() {
        const urlapModel = new UrlapModel();
        new UrlapView($(".urlap"), urlapModel.Leiro);
        $(window).on("kuldes", (event) => {
          
            event.detail.forEach(elem => {
                console.log(elem);
                console.log(elem.valid);
            })
            console.log("kész");
        });
    }





}
export default UrlapController;
 /*
       console.log(urlapModel.Leiro);
       console.log(urlapModel.Leiro.nev.tipus)
       console.log(urlapModel.Leiro.nev.placeholder)
       console.log(urlapModel.Leiro.szulEv.regex.min)
       console.log(urlapModel.Leiro.szulEv.value)
      */