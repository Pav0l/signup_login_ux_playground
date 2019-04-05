const app = require('./routing/server');
require('dotenv').config();

const PORT = process.env.PORT || 2323;
app.listen(PORT, () => {
  console.log(`Express server is listening at http://127.0.0.1:${PORT}`);
});
