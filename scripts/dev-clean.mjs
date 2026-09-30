import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.PORT ?? "3000";

function killPortWindows(p) {
  try {
    const out = execSync(`netstat -ano | findstr :${p}`, { encoding: "utf8" });
    const pids = new Set();
    for (const line of out.split(/\r?\n/)) {
      if (!line.includes("LISTENING")) continue;
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== "0") pids.add(pid);
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
      } catch {
        /* already stopped */
      }
    }
  } catch {
    /* nothing listening */
  }
}

function killPortUnix(p) {
  try {
    execSync(`lsof -ti:${p} | xargs kill -9`, { stdio: "ignore", shell: true });
  } catch {
    /* nothing listening */
  }
}

const nextDir = path.join(root, ".next");
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
}

if (process.platform === "win32") {
  killPortWindows(port);
} else {
  killPortUnix(port);
}

console.log(`Starting dev server on http://localhost:${port} ...`);
execSync(`npx next dev -p ${port}`, { cwd: root, stdio: "inherit" });
