const express = require('express');
const app = express();

// Import Routers
const spamHamRouter = require("./routes/spamHamRouter")

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Front Page!!"
    })
})
app.use("/spamHam", spamHamRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));