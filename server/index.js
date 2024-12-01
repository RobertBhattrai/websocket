const express = require("express");

const {Server} = require("socket.io");

const app = express();
const http = require("http");

// const server = new Server(app);
const io = new Server(server, {
    cors: {
        origin: "https://localhost:5173",
        methods: ["GET","POST"],
    },
});

io.on("connection",(socket) =>{
    console.log("A user connected with ID of:",socket.io);
})

    socket.on("message",(message) =>{
        console.log("Message Received: ",message);
        io.exit("message", message);
    });

    socket.on("close", () =>{
        console.log("User Disconnected with ID: ",socket.io);
    })

const PORT = 3003;

app.use("/", (req, res) =>{
    res.send("Hello World!");
} )//call back function

app.use("/robert",(req, res) =>{
    res.send("HAIL WORLD");
})

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});

