var share = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('share.html');
};

module.exports = share;