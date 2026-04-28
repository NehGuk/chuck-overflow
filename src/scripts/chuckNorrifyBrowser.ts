const logoContainer = document.querySelector<HTMLElement>("#logo-container")

// for loop to crash browser tab upon clicking on Chuck Norris

logoContainer?.addEventListener("click", () => {
  alert("Careful! Clicking on Chuck Norris may crash your browser!")
  for (let i = 0; i < 1e9; i++) {
    console.log("Oh, no! Chuck Norris is wrecking your browser!")
  }
})
