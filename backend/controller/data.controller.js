const client = require('../db')

client.connect();

const getData = (request, response) => {
    client.query('SELECT * FROM public.welbex_data;', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }    

module.exports = getData