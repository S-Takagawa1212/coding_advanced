"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const correct = searchParams.get("correct");
  const wrong = searchParams.get("wrong");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongIndices, setWrongIndices] = useState<number[]>([]);

  useEffect(() => {
    if (correct) {
      setCorrectCount(Number(correct));
    }
    if (wrong) {
      try {
        const parsed = JSON.parse(wrong) as number[];
        setWrongIndices(parsed);
      } catch (e) {
        console.error("Invalid wrong parameter", e);
      }
    }
  }, [correct, wrong]);

  // 誤答問題だけで再挑戦
  const handleRetryWrong = () => {
    if (wrongIndices.length === 0) {
      return;
    }
    // 誤答問題だけを抽出した新しいクイズデータを用意し、それを別ページに飛ばしてもいいし、
    // ここでステートとして管理しても良い。
    // 簡単を期すために、誤答問題だけを quizData から再構成したページに移動する例:

    // クエリパラメータに誤答のインデックスを持たせ、quizWrong.tsx などで出題する方法などが考えられる。
    router.push(`/quizWrong?wrong=${encodeURIComponent(JSON.stringify(wrongIndices))}`);
  };

  // とりあえずトップへ戻るボタン
  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>結果</h1>
      <p>正解数: {correctCount}</p>
      <p>誤答数: {wrongIndices.length}</p>
      <button onClick={handleRetryWrong}>
        誤答問題だけ再挑戦
      </button>
      <button onClick={handleGoHome}>
        トップに戻る
      </button>
    </div>
  );
}
