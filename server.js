javascript
const { Client } = require('pg');

// COLE A SUA URL AQUI DENTRO DAS ASPAS
const connectionString = 'SUA_URL_EXTERNA_AQUI';

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
