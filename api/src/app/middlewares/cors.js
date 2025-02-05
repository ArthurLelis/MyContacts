module.exports = (request, response, next) => {
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:8080',
    ];

    const origin = request.get('origin');
    const isAllowed = allowedOrigins.includes(origin);

    if (isAllowed) {
        response.setHeader('Access-Control-Max-Age', '10');
        response.setHeader('Access-Control-Allow-Methods', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        response.setHeader('Access-Control-Allow-Origin', origin);
    }

    next();
}
