import { Joke } from '../models/joke';

/** return fresh array of test categories */
export function getTestJoke(): Joke {
  return {
    category: 'science', 
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "RlrANagQSCG1oWxp8Fsj6w",
    url: "https://api.chucknorris.io/jokes/RlrANagQSCG1oWxp8Fsj6w",
    value: "Chuck Norris knows Chivalry is dead. He was the one who killed it."
  };
}