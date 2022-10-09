const User = require('../application/user_service');
const Utils = require('../utils/utils');

const route = '/movie';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await User.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await User.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await User.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listProd`, async (req, res) => {
        const response = await User.listByProdutora(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await User.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};