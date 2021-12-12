//API Routes
//Initialize express router
let router = require('express').Router()
//Setup default API routes
router.get('/', function(req, res){
    res.json({
        status: 'API Its working!',
        message: 'Welcome to RESTHub crafted with love!'
    })
})
//Export API routes
module.exports = router