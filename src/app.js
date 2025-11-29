import "bootstrap";
import "./style.css";


window.onload = function () {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function getRandomWas(arr) {
    if (!arr || arr.length=== 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const whoWas = getRandomWas(who);
  const actionWas = getRandomWas(action);
  const whatWas = getRandomWas(what);
  const whenWas = getRandomWas(when);

  const randomExcuse = whoWas + " " + actionWas + " " + whatWas + " " + whenWas;

  

  document.getElementById("excuse").innerHTML = randomExcuse
  console.log(randomExcuse);
};
