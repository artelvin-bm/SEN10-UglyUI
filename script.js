// script.js

// ===== Testable helper functions =====
// returns a random emoji from the christmas set
function getRandomChristmasEmoji() {
  const emojis = ["🎄", "❄️", "🎁", "🔔", "✨", "🎅", "🕯️"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// create N snowflake elements and append to body
function createSnowflakes(count = 30) {
  const created = [];
  for (let i = 0; i < count; i++) {
    const el = document.createElement ? document.createElement("div") : { tag: "div" };
    if (el.style) {
      el.className = "snowflake";
      el.textContent = Math.random() > 0.7 ? getRandomChristmasEmoji() : "❄";
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 4 + Math.random() * 4 + "s";
      el.style.fontSize = 12 + Math.random() * 24 + "px";
    }
    if (typeof document !== "undefined" && document.body && document.body.appendChild) {
      document.body.appendChild(el);
    }
    created.push(el);
  }
  return created;
}

// a combined function that will run on page load
function runChristmasMagic() {
  try {
    // optionally play a short sound (may be blocked by browsers)
    const audio = new Audio("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg");
    audio.volume = 0.05;
    audio.play().catch(() => {});
  } catch (e) {
    // ignore audio errors
  }

  // create the snowflakes
  createSnowflakes(30);
}

// run on page load (keeps current behavior)
if (typeof window !== "undefined") {
  window.addEventListener("load", runChristmasMagic);
}

// Export functions for Jest (Node/CommonJS)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getRandomChristmasEmoji,
    createSnowflakes,
    runChristmasMagic
  };
}
