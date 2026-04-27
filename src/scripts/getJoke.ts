import axios from "axios"

type ChuckJoke = {
  icon_url: string
  id: string
  url: string
  value: string
}

export const getJoke = async () => {
  let response = await axios.get<ChuckJoke>("https://api.chucknorris.io/jokes/random")
  let joke = response.data.value
  return joke
}
