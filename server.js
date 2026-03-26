javascript
const { Client } = require('pg');

// COLE A SUA URL AQUI DENTRO DAS ASPAS
const connectionString = 'javascript
const { Client } = require('pg');

// COLE A SUA URL AQUI DENTRO DAS ASPAS
const connectionString = 'postgresql://admin:DXEswdTW5ViMLCF86WsZMYFWRDEb0O2m@dpg-d72alfea2pns73ess3dg-a.virginia-postgres.render.com/mvpedidos';

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

async function iniciarBanco() {
  await client.connect();
  // Cria a tabela de pedidos se ela não existir
  await client.query(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id SERIAL PRIMARY KEY,
      sabor TEXT NOT NULL,
      data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("Banco de dados pronto para receber empadas!");
}

iniciarBanco();';

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

async function iniciarBanco() {
  await client.connect();
  // Cria a tabela de pedidos se ela não existir
  await client.query(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id SERIAL PRIMARY KEY,
      sabor TEXT NOT NULL,
      data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("Banco de dados pronto para receber empadas!");
}

iniciarBanco();
