'use strict';

const express = require('express'),
    home = express.Router();

home
	.get('/', (req, res) => res.render('index'))
	.get('/about', (req, res) => res.render('about'))
	.get('/backend', (req, res) => res.render('backend'))
	.get('/frontend', (req, res) => res.render('backend'))
	.get('/culture', (req, res) => res.render('culture'))
	.get('/infrastructure', (req, res) => res.render('infrastructure'))
	.get('/intellection', (req, res) => res.render('intellection'))
	.get('/lingo', (req, res) => res.render('lingo'))
	.get('/mobile', (req, res) => res.render('mobile'))
	.get('/opensource', (req, res) => res.render('opensource'))
	.get('/utilities', (req, res) => res.render('utilities'))
	.get('/stack', (req, res) => res.render('stack'));

console.log("Main endpoint at /");

module.exports = home;