// quizData.ts

export type QuizItem = {
  meaning: string;    // 日本語などの意味
  correct: string;    // 正解の単語
  options: string[];  // 選択肢
};

export const quizData: QuizItem[] = [
  {
    meaning: "コンピュータの操作を行う基本ソフトウェア",
    correct: "OS",
    options: ["OS", "CPU", "GPU", "BIOS"],
  },
  {
    meaning: "ネットワーク間を中継する装置",
    correct: "ルータ",
    options: ["ルータ", "スイッチ", "アクセスポイント", "ハブ"],
  },
  {
    meaning: "プログラムのソースコードを機械語に変換するもの",
    correct: "コンパイラ",
    options: ["コンパイラ", "インタプリタ", "エディタ", "リンカ"],
  },
];
