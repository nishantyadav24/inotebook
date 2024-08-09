var jwt = require('jsonwebtoken');        
const JWT_SECRET = 'someonecalledmejimmy$nisham';

const fetchuser = async (req, res, next) => {
    try {
        // The request to verify the token is being made from the client (user).
        // The token is expected to be in the 'auth-token' header of the request.
        const token = req.header('auth-token');

        if (!token) {
            // If no token is provided, the server sends a 401 Unauthorized response to the client.
            return res.status(401).json({ error: "Please authenticate using a valid token" });
        }

        // The server verifies the token using the secret key.
        const data = jwt.verify(token, JWT_SECRET);
        
        // If the token is valid, the server extracts the user information and attaches it to the request object.
        req.user = data.user;

        // The server calls the next middleware or route handler in the stack.
        next();
    } catch (error) {
        // If token verification fails, the server sends a 401 Unauthorized response to the client.
        res.status(401).send({error:"please login use the valid taoken "});
    }
}

module.exports = fetchuser;
