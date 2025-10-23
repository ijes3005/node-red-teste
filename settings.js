module.exports = {
  uiPort: process.env.PORT || 1880,
  credentialSecret: process.env.NODE_RED_SECRET ||,
  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "admin",
      permissions: "*"
    }]
  },
  logging: {
    console: {
      level: "info"
    }
  }
};