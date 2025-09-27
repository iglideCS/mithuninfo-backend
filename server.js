require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
const connectDatabase = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const achievementRoute = require("./router/achievement-router");
const cors = require("cors");
const adminRoute = require("./router/admin-router");
const path = require("path");

const _dirname = path.resolve();
const port = process.env.PORT || 8000;

const originUrl = process.env.NODE_ENV==='production' ? 'https://mithuninfo.vercel.app' : `http://localhost:5173`;

console.log("Origin Url:", originUrl);

const corsOption = {
    origin: originUrl,
    methods: "GET, POST, PUT, DELETE, HEAD, PATCH",
    credentials: true,
};

app.use(cors(corsOption));


//Middleware
app.use(express.json());


app.get("/api/health", (req, res) => {
    res.send({
        status: "OK"
    });
});

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", achievementRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

connectDatabase().then(() =>{
    app.listen(port, () => {
        console.log(`Health check server is running on port ${port}`);
    });
});
