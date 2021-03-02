const {Pool} = require("pg");
async function criarConexao () {

const pool = new Pool({
    connectionString: 'postgres://bfjpcnqhotffwq:7abc6eb346d1fe7d2988f5ba4b3a264da00bda04b8cda68de1a42a2788388419@ec2-54-90-13-87.compute-1.amazonaws.com:5432/d80ob06she6n5o',
    ssl: {
        rejectUnauthorized: false
    }
});

let con = await pool.connect();
//await con.query("insert into pizza (tamanho) values ($1), ($2)", ["pequena", "grande"]);
//await con.query("insert into pizza (sabor) values ($1), ($2), (&3)", ["frango catupiry", "chocolate", "portuguesa"]);
//await con.query("delete from pizza where tamanho like 'pequena'");
//await con.query("delete from pizza where sabor like 'portuguesa'");
//await con.query("update pizza set sabor = $2 where tamanho = $2", ["chocolate", "grande"]);
await con.query("drop table pizza");
let res = await con.query("select * from pizza");
let tuplas = res.rows;
for(let tupla of tuplas) {
    console.log(tupla);
}
con.release();
}
criarConexao();