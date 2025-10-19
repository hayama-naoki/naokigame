const fortunes = ["大吉", "中吉", "小吉", "凶", "末吉"];
const btn = document.getElementById("fortuneBtn");
const result = document.getElementById("fortuneResult");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[randomIndex];
});