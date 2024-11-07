import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-2">
      <Counter start={10} update={5} />
      <Counter start={20} />
      <Counter start={30} />
    </main>
  );
}

export default App;
