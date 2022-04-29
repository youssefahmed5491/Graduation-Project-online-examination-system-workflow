import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { resolvePath } from "react-router-dom";
//import MediaHandler from "../MediaHandler";

const Zoom = () => {
    const myVideo = document.createElement("video");
    //const [myVideo, setMyVideo] = useState(HTMLMediaElement());
    //const [userVideo, setUserVideo] = useState(HTMLMediaElement());
    const [hasMedia, setHasMedia] = useState(false);
    const [otherUserId, setOtherUserId] = useState(null);
    const getPermissions = () => {
        //fekret get permission en e7na notlob meno eno ye allow el camera wel mic
        return new Promise((res, rej) => {
            //2awel b2a maye3mel allow
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true }) //5ally el video wel audio true
                .then((stream) => {
                    //5alas sama7ly b kolo keda b2a hayerga3ly 7aga esmaha stream
                    res(stream);
                })
                .catch((e) => {
                    //law masama7leesh bel video wel audio edeelo error
                    throw new Error(`Unable to fetch stream ${e}`);
                });
        });
    };
    const componentWillMount = () => {
        getPermissions().then((stream) => {
            setHasMedia(true);

            try {
                myVideo.src = URL.createObjectURL(stream);
            } catch (e) {
                myVideo.srcObject = stream;
            }

            myVideo.play();
        });
    };

    return (
        <>
            <div>hi</div>
            <div className="video-container">
                <video
                    className="my-video"
                    ref={(ref) => {
                        myVideo = ref;
                    }}
                    src=""
                ></video>
                <video
                    className="user-video"
                    ref={(ref) => {
                        myVideo = ref;
                    }}
                    src=""
                ></video>
            </div>
        </>
    );
};

export default Zoom;
