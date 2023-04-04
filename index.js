const express = require('express');
const app = express();
const messageRouter = require("./routes/message");
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/api/message",messageRouter);

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})