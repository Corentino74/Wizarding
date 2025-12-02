// ---- Setup ----

// Le Path 
const path = require('path');

// Express
const express = require('express');
const app = express();
const port = 33; // CLAIR OBSCUR TROUBLE DE RATURE COURBERA EFFIEL

// Handlebars
const hbs = require("hbs");
// Configuration de Handlebars pour Express
app.set("view engine", "hbs"); // On définit le moteur de template que Express va utiliser
app.set("views", path.join(__dirname, "views")); // On définit le dossier des vues (dans lequel se trouvent les fichiers .hbs)
hbs.registerPartials(path.join(__dirname, "views", "partials")); // On définit le dossier des partials (composants e.g. header, footer, menu...)

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Prisma
const { PrismaClient } = require('@prisma/client');
const {Database} = require('sqlite3');
const {send} = require("process");
const prisma = new PrismaClient();

// ---- Routes ---- 

// Route racine
