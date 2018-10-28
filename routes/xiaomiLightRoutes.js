const xiaomiController = require('../controllers/xiaomiController');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    console.log('que la lumiere soit!');
});

router.get('/scan', (req, res) => {
    xiaomiController.toggleLight(req, res);
});

router.get('/toggle/:lightIp', (req, res) => {
    xiaomiController.toggleLight(req, res);
});

router.get('/scan', (req, res) => {
    xiaomiController.scan(req, res);
});

router.get('/setColor/:lightIp/:red/:green/:blue/:effect/:duration', (req, res) => {
    xiaomiController.setColor(req, res);
});

router.get('/setBrightness/:lightIp/:brightness/:effect/:duration', (req, res) => {
    xiaomiController.setBrightness(req, res);
});

module.exports = router;