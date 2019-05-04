const parseCookies = (req, res, next) => {
    var cookies = req.headers.cookies;
    console.log(cookies);
    
    // getting the object containing cookies, need to format them into request cookies correctly
    // splitting the string at "; "

    req.cookies = cookies;
    next();
};

module.exports = parseCookies;