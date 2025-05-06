const jwt = require('jsonwebtoken');
const config = require('config.json');
const db = require('_helpers/db');

module.exports = authorize;

function authorize(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    // authenticate JWT token and attach user to request object (req.user)
    async (req, res, next) => {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Missing token' });
      }

      try {
        const decoded = jwt.verify(token, config.secret);
        const account = await db.Account.findByPk(decoded.id);

        if (!account || (roles.length && !roles.includes(account.role))) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        // attach user
        req.user = account;
        next();
      } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
    }
  ];
}