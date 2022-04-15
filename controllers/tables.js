// const tables = require('../models/tables');
var tables = require('../models/tables');
const { put } = require('../routes');
// List of all tables signs
exports.tables_list = async function (req, res) {
    try {
        thetables = await tables.find();
        res.send(thetables);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific table sign.
exports.tables_info = function (req, res) {
    res.send('NOT IMPLEMENTED: table detail: ' + req.params.id);
};
// Handle table create on POST.
exports.tables_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tables();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.table_color = req.body.table_color;
    document.table_size = req.body.table_size;
    document.table_num = req.body.table_num;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle table delete form on DELETE.
exports.tables_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: tables delete DELETE ' + req.params.id);
};
// Handle tables update form on PUT.
exports.tables_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await tables.findById( req.params.id)
    // Do updates of properties
    if(req.body.table_color)
    toUpdate.table_color = req.body.table_color;
    if(req.body.table_size) toUpdate.table_size = req.body.table_size;
    if(req.body.table_num) toUpdate.table_num = req.body.table_num;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// VIEWS
// Handle a show all view
exports.tables_view_all = async function (req, res) {
    try {
        thetables = await tables.find();
        res.render('tables', { title: 'tables Search Results', results: thetables });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.tables_info = async function(req, res) {
    console.log("info" + req.params.id);
    try {
    result = await tables.findById(req.params.id);
    res.send(result);
    } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };