const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://jrskmdjobstsft:0631d8e816e212e99ad01d5b6f0a52ad7bd6c159ac6e0bf63b659ddbfed25da5@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/ddhr4mc2han9jd',
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = client