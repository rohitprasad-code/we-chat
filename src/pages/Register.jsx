import React from "react";
import Add from "../img/addAvatar.png";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

function Register() {
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        async (downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL,
                            });
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                displayName,
                                email,
                                photoURL: downloadURL,
                            });
                        }
                    );
                }
            );
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrap">
                {/* <span className="logo">We Chat</span> */}
                <span className="title">Register</span>
                <form onSubmit={handleSubmit} className="form">
                    <input required type="text" placeholder="Name" />
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <input
                        required
                        style={{ display: "none" }}
                        type="file"
                        id="file"
                    />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Upload Profile Picture</span>
                    </label>
                    <button>Register</button>
                    {error && (
                        <span className="error">
                            Something went Wrong... Try again later.
                        </span>
                    )}
                </form>
                <span className="login-link">
                    Already have an account? Login
                </span>
            </div>
        </div>
    );
}

export default Register;
