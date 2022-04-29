import { stream } from "browser-sync";
import { resolvePath } from "react-router-dom";

class MediaHandler {
    getPermissions() {
        //fekret get permission en e7na notlob meno eno ye allow el camera wel mic
        return new Promise((res, rej) => {
            //2awel b2a maye3mel allow
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true }) //5ally el video wel audio true
                .then((stream) => {
                    //5alas sama7ly b kolo keda b2a hayerga3ly 7aga esmaha stream
                    resolve(stream);
                })
                .catch((err) => {
                    //law masama7leesh bel video wel audio edeelo error
                    throw new Error("Unable to fetch stream " + err);
                });
        });
    }
}
export default MediaHandler();
