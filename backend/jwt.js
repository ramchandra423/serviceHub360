const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
exports.auth = (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, "mySecretKey");
        
        // Attach decoded user information to request object
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

// Generate JWT token method
exports.generateToken = (payload, expiresIn = '1h') => {
    // Generate token using payload and secret key
    const token = jwt.sign(payload,"mySecretKey", { expiresIn:3600 }); //3600 is for 1 hour
    return token;
};

