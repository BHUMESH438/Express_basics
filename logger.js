const logger = (req, res, next) => {
  //express will suppply req,res,next
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(`method:${method}; url:${url}; time${time}`);
  next(); // allows the next method after it
};

module.exports = logger;
