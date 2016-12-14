(function() {
    'use strict';

    var express = require('express');
    var homeRoutes = express.Router();

    homeRoutes.get('/home', function(req, res){
      res.status(200).json({ blogs: [] });
    });

    homeRoutes.get('/home/:id', function(req, res){
      res.status(200).json({ id: req.params.id });
    });

    homeRoutes.get('/', function(req, res){
      //res.json(result);
    });

    module.exports = {
        routes: function() {
            return homeRoutes;
        }
    };
})();
