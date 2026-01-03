let tg = window.Telegram.WebApp;
tg.ready();

function saveMood() {
  let mood = document.getElementById("mood").value;
  let intensity = document.getElementById("intensity").value;

  document.getElementById("result").innerText =
    `Mood saved: ${mood} (${intensity}/10)`;
}