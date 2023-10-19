import React, { useState } from "react";

const TextArea = () => {
  const [data, setData] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(data).then(() => {
      alert("Text copied to clipboard");
    });
  };
  const handleSave = () => {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "myTextFile.txt";
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleLock = (event) => {
    setIsLocked(!isLocked);
    if (!isLocked) {
      alert("Text area is Locked");
    } else {
      alert("Text area is Unlocked");
    }
  };
  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <div className="text-center mt-6">
      <textarea
        onChange={handleChange}
        className="border-2 border-sky-600 p-2 "
        name=""
        id=""
        cols="80"
        rows="12"
        disabled={isLocked}
      ></textarea>
      <div className="text-center">
        <button
          value={data}
          onClick={handleCopy}
          className="p-2 bg-yellow-800 rounded text-xl text-white m-4"
        >
          Copy
        </button>
        <button
          onClick={handleSave}
          className="p-2 bg-yellow-800 rounded text-xl text-white m-4"
        >
          Save
        </button>
        <button
          onClick={handleLock}
          className="p-2 bg-yellow-800 rounded text-xl text-white m-4"
        >
          {isLocked ? "Unlock" : "Lock"}
        </button>
      </div>
    </div>
  );
};

export default TextArea;
