var Reader = require("./Reader");
var leitor = new Reader();
//Leitor do arquivo users.csv
var Processor = require("./Processor")
var Table = require("./Table")

async function main(){
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)
    console.log(usuarios.rows);
}

main();

