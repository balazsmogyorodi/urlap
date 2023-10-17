import { urlapLeiro } from "./urlapLeiro.js";

class UrlapModel{
    #leiro=[]
    constructor(){
        this.#leiro = urlapLeiro;
    }

    get Leiro(){
        return {...this.#leiro};
    }

}
export default UrlapModel;