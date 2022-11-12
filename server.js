const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));

const navArray = ['/', '/500', '/signup', '/messenger', '/profile', '/profile-change', '/password-change', '/*'];

navArray.forEach((item) => {
    app.get(item, (req, res) => {
        res.sendFile(`${__dirname}/dist/index.html`);
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
