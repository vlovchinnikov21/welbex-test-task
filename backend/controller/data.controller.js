const db = require('../db')

class DataController {
    async getData(req, res) {
        const data = await db.query('SELECT * FROM welbex_data')
        res.json(data)
    }
}
    
module.exports = new DataController()  
    