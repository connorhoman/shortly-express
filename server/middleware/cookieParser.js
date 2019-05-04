const parseCookies = (req, res, next) => {
    var cookies = req.headers;


    
    // var index = cookies.indexOf('shortlyid=');
    // console.log(index);

    // var cookie = cookies.slice(index, index + 40);
    // console.log(cookie);
    // // getting the object containing cookies, need to format them into request cookies correctly
    // // splitting the string at "; "
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