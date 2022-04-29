//javascript el front end (room)

const socket = io("/"); //socket hay connect lel route path beta3na

const videoGrid = document.getElementById("video-grid");
const bola = document.getElementById("lol");

if (lol == 5) {
    bola.style.display = "block";
}

// const myPeer = new Peer(undefined, {
//     //zeyada
//     path: "/peerjs",
//     //
//     host: "/",

//     port: "80",

//     // port: "81",
// }); //undefined deh 3shan ye3melo hwa generation lel ID

const myPeer = new Peer();

const myVideo = document.createElement("video");
myVideo.muted = true;

const peers = {};
//zeyada
let myVideoStream;
//
//get video and audioo from chrome
navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: true,
    })
    //lama ye3mel accept lel terms beta3na
    .then((stream) => {
        myVideoStream = stream;
        addVideoStream(myVideo, stream);

        myPeer.on("call", (call) => {
            console.log("there is a call");
            call.answer(stream);
            const video = document.createElement("video");
            call.on("stream", (userVideoStream) => {
                addVideoStream(video, userVideoStream);
            });
        });
        socket.on("user-connected", (userId) => {
            connectToNewUser(userId, stream);
        });
    });

socket.on("user-disconnected", (userId) => {
    if (peers[userId]) peers[userId].close();
});

myPeer.on("open", (id) => {
    console.log("when i open this is my id");
    console.log(id); //my id
    socket.emit("join-room", ROOM_ID, id); //dah hayeb3at event esmo join-room w haneb3at ma3ah el parameters lel socket
});

// socket.on("user-connected", (userId) => {
//     console.log("User Connected : " + userId);
// });

const connectToNewUser = (userId, stream) => {
    console.log("when someone joins this is his id");
    console.log(userId);
    const call = myPeer.call(userId, stream); //kalemly folan el folany bel userId
    const video = document.createElement("video");

    call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
        video.remove();
    });
    peers[userId] = call;
};

const addVideoStream = (video, stream) => {
    console.log("we entered add video stream");
    video.srcObject = stream;
    //lama 2a5od el video sha8alo
    video.addEventListener("loadedmetadata", () => {
        video.play();
    });
    videoGrid.append(video);
};
