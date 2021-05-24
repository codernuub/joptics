const app = require('./app');
const mongoose = require('mongoose');

const url = process.env.MONGOURI || "http://127.0.0.1:27017";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connected"))
    .catch(err => console.log(err.message))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`up and running on port ${PORT}`));