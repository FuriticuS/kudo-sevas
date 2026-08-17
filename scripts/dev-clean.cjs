#!/usr/bin/env node
/**
 * Полный перезапуск dev-сервера одним вызовом:
 *   1) останавливает устаревшие Next.js dev-серверы (слушают порты 3000–3010);
 *   2) удаляет кэш сборки .next;
 *   3) запускает `next dev` в текущем терминале.
 *
 * Использование: npm run dev:clean
 */
"use strict";

const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const NEXT_DIR = path.join(ROOT, ".next");
const DEV_PORT_START = 3000;
const DEV_PORT_END = 3010;

const c = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
};
const log = (msg) => console.log(`${c.cyan}[dev:clean]${c.reset} ${msg}`);
const warn = (msg) => console.log(`${c.yellow}[dev:clean]${c.reset} ${msg}`);

/** PIDs процессов, слушающих порты dev-сервера (3000–3010). */
function staleServerPids() {
  if (process.platform !== "win32") return [];
  try {
    const out = execSync(
      'powershell -NoProfile -Command "Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.LocalPort -ge ' +
        DEV_PORT_START +
        " -and $_.LocalPort -le " +
        DEV_PORT_END +
        ' } | Select-Object -ExpandProperty OwningProcess -Unique"',
      { encoding: "utf8" }
    );
    return out
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => /^\d+$/.test(s))
      .map(Number);
  } catch {
    return [];
  }
}

function killStaleServers() {
  const pids = staleServerPids();
  if (pids.length === 0) {
    log("устаревших dev-серверов не найдено");
    return;
  }
  log(`найдено dev-серверов: ${pids.join(", ")}`);
  for (const pid of pids) {
    try {
      process.kill(pid, "SIGKILL");
      log(`остановлен процесс ${pid}`);
    } catch {
      /* уже завершён */
    }
  }
}

function clearNextCache() {
  if (fs.existsSync(NEXT_DIR)) {
    fs.rmSync(NEXT_DIR, { recursive: true, force: true });
    log("кэш .next удалён");
  }
}

function startDev() {
  let nextBin;
  try {
    nextBin = require.resolve("next/dist/bin/next");
  } catch {
    warn("не удалось найти next в node_modules — запускаю `npx next dev`");
    const child = spawn("npx", ["next", "dev"], {
      cwd: ROOT,
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("exit", (code) => process.exit(code ?? 0));
    return;
  }
  log("запуск next dev…");
  const child = spawn(process.execPath, [nextBin, "dev"], {
    cwd: ROOT,
    stdio: "inherit",
  });
  child.on("exit", (code) => process.exit(code ?? 0));
}

function main() {
  killStaleServers();
  clearNextCache();
  startDev();
}

main();
