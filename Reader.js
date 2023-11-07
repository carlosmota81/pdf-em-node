const fs = require("fs");
const util = require("util");



class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }


    async Read(filepath){             //Leitor de arquivos
        try{
            return await this.reader(filepath,"utf-8")

        }catch(err){
            return undefined;
        }
    }
}

module.exports = Reader;