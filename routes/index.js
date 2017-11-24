
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index2.html', { title: 'Cloudant Boiler Plate' });
};

exports.map = function(req, res){
  res.render('map.html', { title: 'Cloudant Boiler Plate' });
};

exports.fares = function(req, res){
  res.render('fares.html', { title: 'Cloudant Boiler Plate' });
};

exports.program = function(req, res){
  res.render('program.html', { title: 'Cloudant Boiler Plate' });
};