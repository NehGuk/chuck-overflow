import { getJoke } from "./getJoke"
const jokeBtn = document.querySelector("#joke-btn")

jokeBtn?.addEventListener("click", async () => {
  const joke = await getJoke()
  console.log(joke)
})
