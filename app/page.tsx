import Image from "next/image";
import Square from "./tic tac toe/page";
import Board from "./tic tac toe/page";

export default function Home() {
  return (
    <main>
      <div>
        <Board></Board>
      </div>
    </main>
  );
}
