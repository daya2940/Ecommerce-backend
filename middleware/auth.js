const admin = require("../firebase");
exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    console.log("auth token", firebaseUser);
    req.user = firebaseUser; // adding the token to make it avialable in contollers
    next();
  } catch (err) {
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};
