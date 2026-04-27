import { getJoke } from "./getJoke"
const jokeBtn = document.querySelector<HTMLElement>("#joke-btn")
const jokeContainer = document.querySelector<HTMLElement>("#joke-container")

const clickJokeBtn = () => {
  jokeBtn?.addEventListener("click", async () => {
    const joke = await getJoke()
    if (jokeContainer) jokeContainer.textContent = joke
    if (jokeBtn) jokeBtn.textContent = "Tell me another Chuck Norris joke"
  })
}
clickJokeBtn()
