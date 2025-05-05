module.exports = {
    env: "production",
    apiUrl: process.env.REACT_APP_API_URL || "https://your-production-api.com",
    uploadPath: "/uploads",
    maxFileSize: 5242880, // 5MB
    allowedFileTypes: ["image/jpeg", "image/png", "image/gif"],
    security: {
        jwtExpiration: "24h",
        bcryptRounds: 10
    }
};
