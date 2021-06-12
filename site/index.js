import init, {greet} from "../pkg/hello_wasm.js";

(async _ => {
  const res = await init();
  greet('Oh hi!');
})()
