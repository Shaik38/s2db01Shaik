var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tables_controller = require('../controllers/table');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);


/// car ROUTES ///
// POST request for creating a zodiac.
router.post('/tables', tables_controller.table_create_post);
// DELETE request to delete zodiac.
router.delete('/tables/:id', tables_controller.table_delete);
// PUT request to update zodiac.
router.put('/tables/:id', tables_controller.table_update_put);
// GET request for one zodiac.
router.get('/tables/:id', tables_controller.table_info);
// GET request for list of all zodiac signs.
router.get('/tables', tables_controller.table_list);
module.exports = router;