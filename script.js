let userSkipped = false;

// Automatyczne przejście po 3 sekundach
setTimeout(() => {
  if (!userSkipped) {
    endIntro();
  }
}, 3000);

// Obsługa kliknięcia przycisku SKIP
document.getElementById("skip").addEventListener("click", () => {
  userSkipped = true;
  explodeButton();
  setTimeout(endIntro, 400); // małe opóźnienie na animację przycisku
});

// Funkcja ukrywająca intro i pokazująca hero
function endIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("hero").style.display = "flex";
}

// Animacja „wybuchającego” przycisku SKIP
function explodeButton() {
  const btn = document.getElementById("skip");
  btn.style.transition = "all 0.2s ease";
  btn.style.transform = "scale(1.3) rotate(6deg)";
  btn.style.opacity = "0";
}
