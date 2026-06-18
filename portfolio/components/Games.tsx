"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Tic-Tac-Toe ───────────────────────────────────────────────

function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  function handleClick(i: number) {
    if (board[i] || winner) return;
    const next = board.slice();
    next[i] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  const status = winner
    ? `${winner} wins!`
    : isDraw
    ? "It's a draw!"
    : `${xIsNext ? "X" : "O"}'s turn`;

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{status}</p>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(i)}
            className={`w-[4.5rem] h-[4.5rem] rounded-xl text-2xl font-bold flex items-center justify-center transition-all duration-200 ${
              cell
                ? "bg-[#1E3A5F]/10 dark:bg-blue-400/15"
                : "bg-[#f5f5f7] dark:bg-[#2c2c2e] hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c] cursor-pointer"
            } ${
              cell === "X"
                ? "text-[#1E3A5F] dark:text-blue-400"
                : "text-rose-500 dark:text-rose-400"
            }`}
          >
            {cell}
          </motion.button>
        ))}
      </div>
      <button
        onClick={reset}
        className="text-xs text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors cursor-pointer"
      >
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ─── Memory Match ───────────────────────────────────────────────

const EMOJIS = ["🎯", "🚀", "⚡", "🎨", "🔥", "💎", "🌟", "🎵"];

function MemoryMatch() {
  const [cards, setCards] = useState<{ emoji: string; flipped: boolean; matched: boolean }[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const initGame = useCallback(() => {
    const picked = EMOJIS.slice(0, 8);
    const pairs = [...picked, ...picked]
      .sort(() => Math.random() - 0.5)
      .map((emoji) => ({ emoji, flipped: false, matched: false }));
    setCards(pairs);
    setSelected([]);
    setMoves(0);
    setLocked(false);
  }, []);

  useEffect(() => { initGame(); }, [initGame]);

  function handleFlip(i: number) {
    if (locked || cards[i].flipped || cards[i].matched || selected.length >= 2) return;

    const next = cards.slice();
    next[i] = { ...next[i], flipped: true };
    const newSelected = [...selected, i];
    setCards(next);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = newSelected;
      if (next[a].emoji === next[b].emoji) {
        next[a] = { ...next[a], matched: true };
        next[b] = { ...next[b], matched: true };
        setCards(next);
        setSelected([]);
      } else {
        setLocked(true);
        setTimeout(() => {
          const reset = next.slice();
          reset[a] = { ...reset[a], flipped: false };
          reset[b] = { ...reset[b], flipped: false };
          setCards(reset);
          setSelected([]);
          setLocked(false);
        }, 800);
      }
    }
  }

  const allMatched = cards.length > 0 && cards.every((c) => c.matched);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
        {allMatched ? `You won in ${moves} moves!` : `Moves: ${moves}`}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleFlip(i)}
            className={`w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl text-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
              card.flipped || card.matched
                ? "bg-[#1E3A5F]/10 dark:bg-blue-400/15"
                : "bg-[#f5f5f7] dark:bg-[#2c2c2e] hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c]"
            } ${card.matched ? "opacity-60" : ""}`}
          >
            <span className={`transition-all duration-300 ${card.flipped || card.matched ? "scale-100" : "scale-0"}`}>
              {card.emoji}
            </span>
          </motion.button>
        ))}
      </div>
      <button
        onClick={initGame}
        className="text-xs text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors cursor-pointer"
      >
        New Game
      </button>
    </div>
  );
}

// ─── Snake Game ─────────────────────────────────────────────────

type Point = { x: number; y: number };
const GRID = 20;
const CELL = 16;
const INITIAL_SPEED = 150;

function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const stateRef = useRef({
    snake: [{ x: 10, y: 10 }] as Point[],
    food: { x: 15, y: 10 } as Point,
    dir: { x: 1, y: 0 } as Point,
    nextDir: { x: 1, y: 0 } as Point,
    score: 0,
    gameOver: false,
  });

  const spawnFood = useCallback((snake: Point[]): Point => {
    let food: Point;
    do {
      food = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    } while (snake.some((s) => s.x === food.x && s.y === food.y));
    return food;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { snake, food } = stateRef.current;

    const isDark = document.documentElement.classList.contains("dark");
    ctx.fillStyle = isDark ? "#2c2c2e" : "#f5f5f7";
    ctx.fillRect(0, 0, GRID * CELL, GRID * CELL);

    ctx.fillStyle = isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,95,0.15)";
    for (let i = 0; i <= GRID; i++) {
      ctx.fillRect(i * CELL, 0, 0.5, GRID * CELL);
      ctx.fillRect(0, i * CELL, GRID * CELL, 0.5);
    }

    snake.forEach((seg, i) => {
      const brightness = 1 - (i / snake.length) * 0.5;
      ctx.fillStyle = isDark
        ? `rgba(96,165,250,${brightness})`
        : `rgba(30,58,95,${brightness})`;
      ctx.beginPath();
      ctx.roundRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 3);
      ctx.fill();
    });

    ctx.fillStyle = isDark ? "#f87171" : "#dc2626";
    ctx.beginPath();
    ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  const tick = useCallback(() => {
    const s = stateRef.current;
    if (s.gameOver) return;

    s.dir = s.nextDir;
    const head = { x: s.snake[0].x + s.dir.x, y: s.snake[0].y + s.dir.y };

    if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID ||
        s.snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
      s.gameOver = true;
      setGameOver(true);
      return;
    }

    s.snake = [head, ...s.snake];
    if (head.x === s.food.x && head.y === s.food.y) {
      s.score++;
      setScore(s.score);
      s.food = spawnFood(s.snake);
    } else {
      s.snake.pop();
    }
    draw();
  }, [draw, spawnFood]);

  const startGame = useCallback(() => {
    stateRef.current = {
      snake: [{ x: 10, y: 10 }],
      food: spawnFood([{ x: 10, y: 10 }]),
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      score: 0,
      gameOver: false,
    };
    setScore(0);
    setGameOver(false);
    setStarted(true);
    draw();
  }, [draw, spawnFood]);

  useEffect(() => {
    if (!started || gameOver) return;
    const id = setInterval(tick, INITIAL_SPEED);
    return () => clearInterval(id);
  }, [started, gameOver, tick]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const s = stateRef.current;
      const map: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 }, s: { x: 0, y: 1 },
        a: { x: -1, y: 0 }, d: { x: 1, y: 0 },
      };
      const nd = map[e.key];
      if (nd && (nd.x + s.dir.x !== 0 || nd.y + s.dir.y !== 0)) {
        e.preventDefault();
        s.nextDir = nd;
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => { draw(); }, [draw]);

  const handleSwipe = useCallback((dir: Point) => {
    const s = stateRef.current;
    if (dir.x + s.dir.x !== 0 || dir.y + s.dir.y !== 0) {
      s.nextDir = dir;
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
        {gameOver ? `Game Over! Score: ${score}` : `Score: ${score}`}
      </p>
      <canvas
        ref={canvasRef}
        width={GRID * CELL}
        height={GRID * CELL}
        className="rounded-xl border border-[#e8e8ed] dark:border-[#48484a]"
      />
      {/* Mobile D-Pad */}
      <div className="grid grid-cols-3 gap-1 md:hidden">
        <div />
        <button onClick={() => handleSwipe({ x: 0, y: -1 })} className="w-10 h-10 rounded-lg bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-center justify-center text-[#6e6e73] dark:text-[#a1a1a6] active:bg-[#e8e8ed] dark:active:bg-[#3a3a3c] cursor-pointer">▲</button>
        <div />
        <button onClick={() => handleSwipe({ x: -1, y: 0 })} className="w-10 h-10 rounded-lg bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-center justify-center text-[#6e6e73] dark:text-[#a1a1a6] active:bg-[#e8e8ed] dark:active:bg-[#3a3a3c] cursor-pointer">◄</button>
        <div />
        <button onClick={() => handleSwipe({ x: 1, y: 0 })} className="w-10 h-10 rounded-lg bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-center justify-center text-[#6e6e73] dark:text-[#a1a1a6] active:bg-[#e8e8ed] dark:active:bg-[#3a3a3c] cursor-pointer">►</button>
        <div />
        <button onClick={() => handleSwipe({ x: 0, y: 1 })} className="w-10 h-10 rounded-lg bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-center justify-center text-[#6e6e73] dark:text-[#a1a1a6] active:bg-[#e8e8ed] dark:active:bg-[#3a3a3c] cursor-pointer">▼</button>
        <div />
      </div>
      <button
        onClick={startGame}
        className="text-xs text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors cursor-pointer"
      >
        {started ? "Restart" : "Start Game"}
      </button>
      <p className="text-[10px] text-[#86868b] hidden md:block">Arrow keys or WASD to move</p>
    </div>
  );
}

// ─── Games Section ──────────────────────────────────────────────

const games = [
  { title: "Tic-Tac-Toe", description: "Classic X & O", component: TicTacToe },
  { title: "Memory Match", description: "Find the pairs", component: MemoryMatch },
  { title: "Snake", description: "Eat & grow", component: SnakeGame },
];

export default function Games() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeGame, setActiveGame] = useState(0);
  const ActiveComponent = games[activeGame].component;

  return (
    <section id="games" ref={ref} className="py-24 sm:py-32 bg-[#fbfbfd] dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-4">
            Take a Break
          </h2>
          <p className="text-[#6e6e73] dark:text-[#86868b] text-lg max-w-2xl mx-auto">
            A few simple games to kill some time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl mx-auto"
        >
          <div className="flex justify-center gap-2 mb-8">
            {games.map((game, i) => (
              <button
                key={game.title}
                onClick={() => setActiveGame(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeGame === i
                    ? "bg-[#1E3A5F] dark:bg-blue-500 text-white shadow-lg"
                    : "bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#6e6e73] dark:text-[#a1a1a6] hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c]"
                }`}
              >
                {game.title}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-[#161618] rounded-2xl p-8 border border-[#e8e8ed] dark:border-[#48484a] shadow-sm flex flex-col items-center min-h-[420px] justify-center">
            <p className="text-xs text-[#86868b] mb-6">{games[activeGame].description}</p>
            <ActiveComponent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
