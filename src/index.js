let db = require("./db");
let Pessoa = require("./model/Pessoa");

async function sicronizar() {
    await db.sync();
}

async function inserir (obj) {
    let res = await Pessoa.create(obj)
    console.log(res);
}

let p1 = {nome: "Jack", sobrenome: "Sparrow", endereco: "Rua do Jack"};
let p2 = {nome: "Viola", sobrenome: "Willoughby", endereco: "Rua da Viola"};
let p3 = {nome: "Harry", sobrenome: "Potter", endereco: "Rua do Harry"};
let p4 = {nome: "Sakura", sobrenome: "Haruno", endereco: "Rua da Sakura"};
let p5 = {nome: "Leon", sobrenome: "Kennedy", endereco: "Rua do Leon"};

inserir(p1);
inserir(p2);
inserir(p3);
inserir(p4);
inserir(p5);

async function consultar() {
    let r = await Pessoa.findAll();
    console.log(r);
}

consultar();