"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { quizData } from "./quizData";

export default function QuizPage() {
  const router = useRouter();

  // 全ての問題をステート管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]); // 誤答の問題インデックス
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = quizData[currentIndex];

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correct;
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongAnswers([...wrongAnswers, currentIndex]);
    }
    // 次の問題へ
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 最終問題だったら結果ページへ
      // 結果ページに正解数や誤答インデックスを渡す
      router.push(
        `/result?correct=${correctCount + (isCorrect ? 1 : 0)}&wrong=${JSON.stringify([...wrongAnswers, ...(isCorrect ? [] : [currentIndex])])}`);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>問題 {currentIndex + 1} / {quizData.length}</h2>
      <p>意味: {currentQuestion.meaning}</p>
      <div>
        {currentQuestion.options.map((option, index) => (
          <div key={option} style={{ marginBottom: "10px" }}>
            <button onClick={() => handleAnswer(option)}>
              {index + 1}. {option}
            </button>
          </div>
        ))}
      </div>
      <p>正解数: {correctCount}</p>
    </div>
  );
}
