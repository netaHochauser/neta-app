import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">Ex2- Neta Hochauser</Link>
      </h1>
      <nav>
        
        <Link href="/">Home</Link>
        <Link href="/nasa">Nasa Images</Link>
        <Link href="/ticTacToe">Tic Tac Toe</Link>
      </nav>
    </header>
  );
}
