// app/diary/page.tsx
"use client";

import { useState } from "react";

export default function DiaryPage() {
  const [entry, setEntry] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`日記が保存されました:\n\n${entry}`);
    setEntry(""); // 入力フィールドをクリア
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>日記を書く</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="今日の日記をここに書いてください..."
          style={{
            width: "100%",
            height: "150px",
            padding: "1rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "1rem",
            resize: "none",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          保存
        </button>
      </form>
    </div>
  );
}
