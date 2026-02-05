const yes = document.getElementById("yes");
const no = document.getElementById("no");
const line = document.getElementById("line");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const hearts = document.getElementById("hearts");
const card = document.getElementById("card");
const music = document.getElementById("music");
const btns = document.getElementById("btns");

let noCount = 0;
let yesScale = 1;

const funnyLines = [
  "Nu? 😳 Nuhuuuuh.",
  "Hai amu puiuuuuuuuuuuuuuuuuuu😭😭😭",
  "Eu zic sa mai incerci 💘",
  "Oricum nu merge butonul asta 😁",
  "UNIVERSUL A ZIS DA🌌",
  "Iti dau un bax de TEDDY",
  "Error 404: No not found 😅",
  "Nice try 😌",
  "N-ai voie😤",
  "Yack, nu ne place butonul asta🤮"
];

const pitbullTexts = [
  "MR. WORLDWIDE APPROVED ✅🌍",
  "DALE/10 🔥",
  "Certified Calle Ocho 💃",
  "Hotel Room Service level ✅",
  "Pitbull said: YES 😤"
];

function popHearts(count = 30) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = Math.random() > 0.5 ? "💖" : "💘";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (18 + Math.random() * 26) + "px";
    h.style.animationDelay = (Math.random() * 0.3) + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 2200);
  }
}

function startMusic() {
  if (!music) return;
  try { music.currentTime = 0; } catch (_) {}
  music.volume = 0;
  music.play().catch(() => {});
  let v = 0;
  const target = 0.85;
  const fade = setInterval(() => {
    v += 0.06;
    music.volume = Math.min(v, target);
    if (v >= target) clearInterval(fade);
  }, 90);
}

function runAway() {
  noCount++;

  const rect = card.getBoundingClientRect();
  const maxX = rect.width - 160;
  const maxY = 220;

  const x = Math.random() * maxX;
  const y = 120 + Math.random() * maxY;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  line.textContent = funnyLines[noCount % funnyLines.length];

  yesScale = Math.min(yesScale + 0.10, 1.9);
  yes.style.transform = `scale(${yesScale})`;
}

function accept() {
  startMusic();
  popHearts(90);

  yes.disabled = true;
  no.disabled = true;
  no.style.display = "none";

  const randomText = pitbullTexts[Math.floor(Math.random() * pitbullTexts.length)];
  const stars = "⭐".repeat(10);

  btns.innerHTML = `
    <div class="finalScreen">
      <div class="pill">${randomText}</div>
      <div class="finalTitle">YAAAY! 💖</div>
      <p class="finalText">Acum e oficial: ești Valentine-ul meu 🫶</p>

      <div style="margin:10px 0 14px; font-size:18px;">
        <b>Pitbull Rating:</b> 10/10<br>
        <span style="font-size:20px; letter-spacing:1px;">${stars}</span>
        <div style="margin-top:8px; height:10px; border-radius:999px; background:rgba(255,255,255,.18); overflow:hidden;">
          <div style="height:100%; width:100%; background:rgba(255,255,255,.65);"></div>
        </div>
      </div>

      <!-- ✅ CENTRARE GARANTATA (inline flex, ignoră CSS-ul vechi) -->
      <div style="display:flex; justify-content:center; width:100%; margin-top:14px;">
        <div class="pic" style="width:260px; max-width:80%; margin:0 auto;">
          <img src="pitbull1.jpg" alt="Pitbull"
               onerror="this.closest('.pic').style.display='none'">
        </div>
      </div>

      <p style="margin:14px 0 0; font-size:18px;">I know you want me 😏💃🕺</p>
    </div>
  `;

  title.textContent = "Te iubesc enorm de mult 💖";
  subtitle.textContent = "Verdict final: 10/10, DALE 😄";
  line.textContent = "Happy Valentine’s Day puiu meu 🫶";

  setTimeout(() => popHearts(60), 900);
}

yes.addEventListener("click", accept);
no.addEventListener("mouseenter", runAway);
no.addEventListener("touchstart", (e) => {
  e.preventDefault();
  runAway();
}, { passive: false });
