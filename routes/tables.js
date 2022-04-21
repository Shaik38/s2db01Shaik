/**
 * @Author: Your name
 * @Date:   2022-04-08 11:25:29
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-21 02:28:13
 */
 var express = require('express');
 const tables_controller= require('../controllers/table');
 var router = express.Router();
 
 /* GET Zodiac */
 router.get('/', tables_controller.table_view_all );
 /* GET detail car page */
 router.get('/detail', tables_controller.table_view_one_Page);
 /* GET create update page */
 router.get('/update', tables_controller.table_update_Page);
 /* GET create zodiac page */
 router.get('/create', tables_controller.table_create_Page);
 /* GET delete car page */
 router.get('/delete', tables_controller.table_delete_Page);
 
 module.exports = router;