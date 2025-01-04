// src/components/SetupPage.jsx
import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SetupPage = () => {
  const [mediaUrl, setMediaUrl] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!mediaUrl) {
      alert("Please enter a valid Media URL");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "pages"), {
        mediaUrl,
        qrUrl,
        text,
        mediaType: mediaUrl.endsWith(".mp4") ? "video" : "image",
      });
      navigate(`/${docRef.id}`);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="setup-container">
      <h2>Setup Page</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Media URL (Image or Video)"
        value={mediaUrl}
        onChange={(e) => setMediaUrl(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="QR Code URL"
        value={qrUrl}
        onChange={(e) => setQrUrl(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default SetupPage;
