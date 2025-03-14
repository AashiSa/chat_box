const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
    res.status(200).send("response from eks");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
