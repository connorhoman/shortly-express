const parseCookies = (req, res, next) => {
    var cookies = req.headers;

    if (!cookies.cookie) {
        req.cookies = {};

    } else {
        var cookiesArray = cookies.cookie.slice('; ');

        if (cookiesArray.length === 50) {
            var cookie = cookiesArray.split('=');
            let obj = {}

            obj[cookie[0]] = cookie[1];
            req.cookies = obj;
        } else {
            let cookies = cookiesArray.split('; ')
            var obj = {};

            for (var i = 0; i < cookies.length; i++) {
                let pairs = cookies[i].split('=');
                obj[pairs[0]] = pairs[1];
            }
            req.cookies = obj;
        }
    }
    next();
};

module.exports = parseCookies;