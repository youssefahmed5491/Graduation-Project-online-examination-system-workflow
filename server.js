const express = require("express");
const { Socket } = require("socket.io");

//unique id
const { v4: uuidV4 } = require("uuid");

const app = express();
//kanet createserver(app)
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: { origin: "*" },
});

//el peer
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
    debug: true,
});

//el rabet men el server lel front
app.set("view engine", "ejs");

//our files are in public folder (el script.js)
app.use(express.static("public"));

//specify to the peer server what url you are going to use
app.use("/peerjs", peerServer);

//lw ro7t lel home page hay create room gedeeda ()
app.get("/b", (req, res) => {
    res.redirect(`/${uuidV4()}`);
});
//route haywadeeny le ui el rooms (create url be esm el room id )

app.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room, lol: 5 });
});

io.on("connection", (socket) => {
    console.log("connection");
    socket.on("join-room", (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).emit("user-connected", userId);
        socket.on("disconnect", () => {
            console.log("disconnect");
            socket.to(roomId).emit("user-disconnected", userId);
        });
    });
});

server.listen(80, () => {
    console.log("Server is Running");
});
