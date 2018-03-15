import * as firebase from 'firebase';
import * as Exponent from "expo";

const firebaseConfig = {
    apiKey: "AIzaSyDNYyD0GHzDhygjezHGr1fgd73mGl2smY0",
    authDomain: "yoahorro-dc6e2.firebaseapp.com",
    databaseURL: "https://yoahorro-dc6e2.firebaseio.com",
    projectId: "yoahorro-dc6e2",
    storageBucket: "yoahorro-dc6e2.appspot.com",
    messagingSenderId: "247816612013"
};

// @todo: old data , remove 
const fbConfig = {
    add_id : "452462351799500",
    options: {
        permissions: ["public_profile", "email"]
    }
}

firebase.initializeApp(firebaseConfig);

// get the token from expo and use firebase api to auth
export const  authenticateUser = token => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
};

// Using exponent
export const loginUser = async () => {
    const {type, token} = await Exponent.Facebook
        .logInWithReadPermissionsAsync(fbConfig.add_id, fbConfig.options);
    if (type === "success") {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // console.log(await response.json());
        authenticateUser(token);
    }
}

export const FirebaseLogout = () => {
    // console.log("LOGOUT FROM SERVICE");
    return firebase.auth().signOut();
};

export const database = firebase.database();
export const  currentUser = firebase.auth().currentUser;
export default firebase;