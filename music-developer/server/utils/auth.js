const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET ;
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // Allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    // If token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      // Rely on token data to identify active user profile
      req.activeProfile = data.userType;
    } catch {
      throw new Error("Invalid token");
    }

    // Return the request object so it can be passed to the resolver as `context`
    return req;
  },
  signToken: function ({ email, name, _id, userType }) {
    const payload = { email, name, _id, userType };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};