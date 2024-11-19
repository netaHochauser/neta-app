import { NasaApp } from "./nasa/page";
import TicTacToePage from "./tic tac toe/tic tac toe page";

export default function Home() {
  return (
    <main>
      <div>
        {/* <h1>Hello and welcome to my exrcise</h1> */}
        <TicTacToePage/>
        <NasaApp/>
      </div>
    </main>
  );
}
