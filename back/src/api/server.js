require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Online Port: ', PORT, `http://localhost:${PORT}/`));