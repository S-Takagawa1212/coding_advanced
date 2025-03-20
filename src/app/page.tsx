"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされたことを示す
    setMounted(true);
  }, []);

  // マウント前は null を返してレンダリングしない
  if (!mounted) {
    return null;
  }

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (


      <div style={{ margin: "20px" }}>
        <h1>単語クイズアプリ</h1>
        <button onClick={handleStartQuiz}>クイズ開始</button>
      </div>

  );
}
