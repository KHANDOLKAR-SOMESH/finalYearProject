'use client';

import React, { useState } from 'react';

const ImageInput = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/classify/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className=" rounded-2xl shadow-lg p-6 w-full max-w-md text-white text-center">
        <div className="file-upload flex flex-col items-center gap-4">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/upload-image-494098.png?f=webp&w=256"
            style={{ height: '50px' }}
            alt="Upload"
          />
          <h3 className="text-lg">Click box to upload</h3>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="text-sm"
          />

          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="w-full bg-teal-800 hover:bg-teal-700 transition-colors p-2 rounded-3xl font-semibold"
          >
            {loading ? "Detecting..." : "Upload and Detect"}
          </button>

          {result && (
            <div className="mt-4 space-y-1">
              <p className="text-xl">
                Prediction:{" "}
                <span
                  className={`font-bold ${
                    result.prediction === "real" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {result.prediction.toUpperCase()}
                </span>
              </p>
              <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
