import { season, temperature } from "./named-exports.mjs";
import { isRainihs, humidity } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, {
	PASSWORD,
	USERNAME as MY_USER_NAME,
} from "./mixed-exports.mjs";

console.log(season, temperature);

console.log(isRainihs, humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/todos/1")
	.then((post) => console.log(post))
	.catch((error) => console.log(error));

console.log(DEFAULT_SERVER, PASSWORD, MY_USER_NAME);
