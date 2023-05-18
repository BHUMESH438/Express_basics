const authourize = (req, res, next) => {
  // console.log(req.params); //empty params will come if didnt passconst
  // console.log(req.query.user);
  // const { user } = req.query;
  if (req.query.user === 'bhu') {
    req.user = { name: 'bhu', id: 1 }; // i can access it anywere on the middle were
    console.log(req.user);
    next();
  } else {
    res.status(401).send('<h1>Unauthorized</h1>');
  }
  // console.log('authorize');
  // next();
};
module.exports = authourize;
