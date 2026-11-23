
const SECRET_PASSWORD = "2426"; // Change this password

const promises = [
  ["I promise to listen.", "Even when you don't know how to explain what you're feeling, I'll try to listen patiently without judging."],
  ["I promise to be honest.", "I'll choose honest communication rather than leaving you guessing."],
  ["I promise to cheer for you.", "I'll celebrate the little wins along with the big ones."],
  ["I promise to respect your dreams.", "Your goals matter, and I'll encourage you to keep working toward them."],
  ["I promise to be kind.", "Even when we disagree, I'll try to speak with care and respect."],
  ["I promise to communicate.", "I'll try to talk things through instead of making assumptions."],
  ["I promise to encourage you.", "When things feel difficult, I'll remind you that you can take things one step at a time."],
  ["I promise to appreciate the little things.", "The ordinary conversations and small moments matter too."],
  ["I promise to respect your space.", "I'll respect your time, independence and personal boundaries."],
  ["I promise to celebrate your growth.", "I hope you keep becoming the person you want to be."],
  ["I promise to share laughter.", "I'll always appreciate the silly moments that make an ordinary day better."],
  ["I promise to be thoughtful.", "I'll try to remember the little things that matter to you."],
  ["I promise to be supportive.", "I'll support you while remembering that we both have our own goals and lives."],
  ["I promise to say thank you.", "I won't take your kindness or the effort you make for granted."],
  ["I promise to keep learning.", "I know understanding someone takes effort, and I'll keep learning too."],
  ["I promise to value your feelings.", "Your feelings deserve to be heard, even when we see things differently."],
  ["I promise to make time.", "I'll do my best to make space for meaningful moments and conversations."],
  ["I promise to be patient.", "I'll remember that we are both learning and growing."],
  ["I promise to respect your choices.", "I'll respect your decisions and the person you are."],
  ["I promise to remind you to rest.", "You don't have to be productive every moment to be worthy of a break."],
  ["I promise to treasure memories.", "I'll appreciate the little memories we create, not just special occasions."],
  ["I promise to wish you happiness.", "Above everything, I hope you keep finding joy, peace and reasons to smile."]
];

function unlockBook() {
  const entered = document.getElementById("passwordInput").value;

  if (entered === SECRET_PASSWORD) {
    showPage("coverScreen");
  } else {
    document.getElementById("errorMessage").textContent =
      "Not quite! Try again ♡";
  }
}

function showPage(pageId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
  window.scrollTo(0, 0);
}

function buildHearts() {
  const grid = document.getElementById("heartGrid");
  grid.innerHTML = "";

  // 22 hearts arranged into a heart-like shape
  const rows = [6, 6, 4, 3, 2, 1];
  let index = 0;

  rows.forEach(count => {
    const row = document.createElement("div");
    row.className = "heart-row";

    for (let i = 0; i < count; i++) {
      const number = index + 1;
      const stamp = document.createElement("button");

      stamp.className = "heart-stamp";
      stamp.innerHTML = `♥<span>${number}</span>`;
      stamp.setAttribute("aria-label", `Promise ${number}`);

      stamp.onclick = () => openPromise(indexFor(number));

      row.appendChild(stamp);
      index++;
    }

    grid.appendChild(row);
  });
}

function indexFor(number) {
  return number - 1;
}

function openPromise(index) {
  document.getElementById("promiseNumber").textContent =
    `PROMISE ${String(index + 1).padStart(2, "0")}`;

  document.getElementById("promiseTitle").textContent =
    promises[index][0];

  document.getElementById("promiseText").textContent =
    promises[index][1];

  document.getElementById("promiseModal").classList.remove("hidden");
}

function closePromise() {
  document.getElementById("promiseModal").classList.add("hidden");
}

buildHearts();
