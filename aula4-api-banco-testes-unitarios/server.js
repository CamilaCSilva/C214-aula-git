require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(3000, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('REST server running on port 3000...');
});