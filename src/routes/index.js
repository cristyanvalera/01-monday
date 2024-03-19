const express = require('express');
const router = express.Router();
const projects = require('../projects.json');

// colocar las rutas aquí
router.get('/', (req, res) => {
    return res.render('home');
});

router.get('/services', (req, res) => {
    res.render('services');
});

router.get('/aboutme', (req, res) => {
    return res.render('aboutme');
});

router.get('/projects/', (req, res) => {
    return res.render('projects', { projects });
});

module.exports = router;
