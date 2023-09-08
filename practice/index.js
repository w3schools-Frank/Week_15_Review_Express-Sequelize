const express = require("express");
const instructorRoutes = require("./routes/instructorRoutes");
const learnerRoutes = require("./routes/learnerRoutes");
const { testConnection } = require("./models/conn");

const app = express();
const PORT = 3001;
app.use(express.json());

testConnection();

app.use("/instructors", instructorRoutes);
app.use("/learners", learnerRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})