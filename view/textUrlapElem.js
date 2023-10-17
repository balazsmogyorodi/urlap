class TextUrlapElem{

    #key;
    #leiro;
    #formElem
    #value
    constructor(key, leiro, szuloElem){
        this.#key = key;
        this.#leiro = leiro;
        this.#formElem = szuloElem;
        this.#textElem();
        this.inputElem=$(`#${this.#key}`)
        console.log("input", this.inputElem);
        this.validelem = this.#formElem.children("div:last-child").children(".valid");
        this.invalidElem = this.#formElem.children("div:last-child").children(".invalid");;
        console.log(this.validelem)
        console.log(this.invalidElem)
        this.inputElem.on("keyup",()=>{
            this.#value = this.inputElem.val();
            let reg = this.#leiro.regex;
            let regObj = new RegExp(reg);
            console.log(regObj.test(this.#value));
            if (regObj.test(this.#value) == true){
                this.valid = true;
                this.validelem.removeClass("elrejt");
                this.invalidElem.addClass("elrejt");
            } else{
                this.valid = false;
                this.validelem.addClass("elrejt");
                this.invalidElem.removeClass("elrejt");
            }
        })
    }




    #textElem() {
        let txt = `<div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">${this.#key}</label>
        <input type="${this.#leiro.tipus}}" class="form-control" id="${this.#key}" placeholder="${this.#leiro.placeholder}" name="${this.#key}"
        pattern="${this.#leiro.regex}" value="${this.#leiro.value}">
        <div class="valid elrejt">OK</div>
        <div class="invalid elrejt">${this.#leiro.validalas}</div>
      </div>`
        this.#formElem.append(txt);
    }





}
export default TextUrlapElem;