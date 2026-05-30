import React, { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./Api/constants";

export default function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [moveDown, setMoveDown] = useState(false);

  // Smooth typing animation
  useEffect(() => {
    let index = 0;

    setDisplayedText("");

    const interval = setInterval(() => {
      if (index < result.length) {
        const char = result.charAt(index);
        setDisplayedText((prev) => prev + char);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [result]);

  const askQuestion = async () => {
    // Input box smooth downward move
    setMoveDown(true);

    const payload = {
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: question,
        },
        {
          role: "system",
          content: `You are a real human. so give me short and precise response of this ${question} like real human do advice. Avoid vertical bars and give response in proper structure way like real chatgpt do.`,
        },
      ],
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          // API KEY
          Authorization:
            "Bearer",  
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log(data);

      setResult(data.choices[0].message.content);

      // input clear
      setQuestion("");
    } catch (error) {
      console.log(error);
      setResult("Error aa gaya 😢");
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen text-center overflow-hidden">
      {/* Sidebar */}
      <div className="col-span-1 bg-zinc-800"></div>

      {/* Main */}
      <div className="col-span-4 relative overflow-hidden bg-[radial-gradient(circle_at_top,#0f172a,#020617,#000)]">
        
        {/* Floating Particles ✨ */}
        <div className="absolute top-20 left-40 w-2 h-2 bg-cyan-400 rounded-full blur-sm animate-ping"></div>
        <div className="absolute top-60 right-52 w-3 h-3 bg-pink-500 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-20 right-80 w-1.5 h-1.5 bg-cyan-300 rounded-full blur-sm animate-ping"></div>

        {/* Floating Effect Particles 🚀 */}
        <div className="absolute top-40 left-60 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-52 right-72 w-4 h-4 bg-fuchsia-500 rounded-full blur-md animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-[70%] w-2 h-2 bg-violet-400 rounded-full blur-sm animate-[float_5s_ease-in-out_infinite]"></div>

        {/* Result Area */}
        <div
          className={`container overflow-auto px-10 no-scrollbar transition-all duration-700 ${
            moveDown ? "pt-10 h-[75vh]" : "h-0"
          }`}
        >
          {displayedText && (
            <div className="bg-white/5 backdrop-blur-2xl text-white font-sans font-semibold p-6 rounded-3xl text-left whitespace-pre-wrap leading-8 border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.15)] animate-fadeIn">
              {displayedText}
            </div>
          )}
        </div>

        {/* Input Box */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 w-full flex justify-center ${
            moveDown ? "bottom-5" : "top-1/2 -translate-y-1/2"
          }`}
        >
          <div className="w-115 rounded-4xl border border-transparent p-0.5 bg-[linear-gradient(120deg,#ff00ff,#8b5cf6,#00ffff,#ff00ff)] bg-size-[300%_300%] animate-[gradient_6s_ease_infinite]">
            <div className="flex items-center rounded-[30px] bg-[#0b1120] backdrop-blur-xl">
              <input
                type="text"
                placeholder="Ask me anything...🫠"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    askQuestion();
                  }
                }}
                className="h-12 flex-1 bg-transparent px-6 text-white outline-none text-lg"
              />

              <button
                onClick={askQuestion}
                className="px-5 text-cyan-300 hover:text-pink-500 transition-all duration-300 cursor-pointer"
              >
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
