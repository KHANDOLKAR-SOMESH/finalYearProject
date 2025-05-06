'use client';

import React, { useState } from 'react';

const ImageInput = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview

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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    // Create a preview URL for the selected image
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-zinc-800">
      <div className="rounded-2xl shadow-xl p-6 w-full max-w-md bg-zinc-800 text-center">
        <div className="file-upload flex flex-col items-center gap-4">
          {!imagePreview && (
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/upload-image-494098.png?f=webp&w=256"
              className="h-12"
              alt="Upload"
            />
          )}
          <h3 className="text-lg font-medium text-gray-700">Click below to upload</h3>

          {imagePreview && (
            <div className="mb-4 w-full">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-w-xs mx-auto rounded-md"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-sm text-gray-600"
          />

          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="w-full bg-teal-600 hover:bg-teal-500 text-white transition-colors p-2 rounded-full font-semibold"
          >
            {loading ? "Detecting..." : "Upload and Detect"}
          </button>

          {result && (
            <div className="mt-4 space-y-1">
              <p className="text-xl text-gray-800">
                Prediction:{" "}
                <span
                  className={`font-bold ${
                    result.prediction === "real" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {result.prediction.toUpperCase()}
                </span>
              </p>
              <p className="text-gray-600">Confidence: {(result.confidence * 100).toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
