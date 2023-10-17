import NumberUrlapElem from "./numberUrlapElem.js";
import TextUrlapElem from "./textUrlapElem.js";

class UrlapView {
    #leiro
    #szuloElem
    #formElem
    #valid = true;
    #urlapEllemlista = [];
    constructor(szuloElem, leiro) {
        this.#szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#szuloElem.append("<form>");
        this.#formElem = this.#szuloElem.children("form");
        this.#urlapOsszerak()
        this.submitElem = $("#submit");
        this.submitElem.on("click", (event) => {
            event.preventDeafault();
            this.#submitTrigger();
        })



    }

    #urlapOsszerak() {
        let text = "";
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapEllemlista.push(new TextUrlapElem(key, this.#leiro[key], this.#formElem));
                    // this.#formElem.append(this.#textElem(key));
                    break;
                case "number":
                    this.#urlapEllemlista.push(new NumberUrlapElem(key, this.#leiro[key], this.#formElem));
                    break;
            }
        }
        this.#formElem.append(`<input type="submit" id="submit" value="OK">`);
    }



  

    #submitTrigger() {
        window.dispatchEvent(new CustomEvent("kuldes", {detail: this.#urlapEllemlista}));
    }





}
export default UrlapView;