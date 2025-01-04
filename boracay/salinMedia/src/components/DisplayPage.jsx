// src/components/DisplayPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const DisplayPage = () => {
  const { uniqueId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (uniqueId) {
        const docRef = doc(db, "pages", uniqueId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      }
    };
    fetchData();
  }, [uniqueId]);

  if (!data) return <div className="loading-message">Loading...</div>;

  return (
    <div className="display-page">
      {data.mediaType === "image" ? (
        <img
          src={data.mediaUrl}
          alt="Media Content"
          className="display-media"
        />
      ) : (
        <video
          src={data.mediaUrl}
          autoPlay
          loop
          controls
          className="display-media"
        />
      )}
      <p className="display-text">{data.text}</p>
      {data.qrUrl && (
        <img src={data.qrUrl} alt="QR Code" className="display-qr" />
      )}
    </div>
  );
};

export default DisplayPage;
