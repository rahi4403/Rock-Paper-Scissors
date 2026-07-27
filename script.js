let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
const messageshows = document.querySelector("#message");
const randcompchoice = () => {
  let options = ["stone", "parchment", "twin blades"]; //we store our options in an array because math.random function generates function between numbers,and since we have stored it in array,the indices can be accessed using math.random to generate a random computer choice
  const randchoicebycomp = Math.floor(Math.random() * 3); //math.floor since we dont want decimal choice,and math.random()*3 since the function gives us choice from 0 to n-1 so in this case we get between 0 to 2(3-1),since the array has indices 0,1,2
  return options[randchoicebycomp];
};
const draw = () => {
  console.log("Neither Hath Prevailed");
  messageshows.innerText = "Neither Hath Prevailed";
  messageshows.style.background="linear-gradient(135deg, #efadfc 0%, #881e7d 50%, #2e052b 100%)"
};
const userscoreset=document.querySelector("#userscore")
const compscoreset=document.querySelector("#compscore")

const game = (userchoice) => {
  console.log("user's choice was ", userchoice);
  const compchoice = randcompchoice();
  console.log("computer's choice was", compchoice);
  if (userchoice === compchoice) {
    draw();
  } else {
    let userwins = true; //we preassume a condition
    if (userchoice === "stone") {
      userwins = compchoice === "parchment" ? false : true; //the initial condition about user winning becomes false since parchment defeats stone,and true in else since stone defeats twin blades
    } else if (userchoice === "parchment") {
      userwins = compchoice === "twin blades" ? false : true;
    } else {
      userwins = compchoice === "stone" ? false : true;
    }
    showwinner(userwins,userchoice,compchoice);
  }
};
const showwinner = (userwins,userchoice,compchoice) => {
  if (userwins) {
    userscore++;
    userscoreset.innerText=userscore
    console.log("Victory is Thine!!");
    messageshows.innerText = `Victory is Thine!! The Foe's ${compchoice} hath fallen before thy ${userchoice}!`;
    messageshows.style.background ="radial-gradient(circle, #2ed573 0%, #11dfac 50%, #032b1f 100%)";
  } else {
    compscore++;
    compscoreset.innerText=compscore
    console.log("Defeat Befalls thee");
    messageshows.innerText = `Defeat Befalls Thee-Thy ${userchoice} hath fallen before the Foe's ${compchoice}!`;
    messageshows.style.background ="radial-gradient(circle, #ff5e3a 0%, #800c0c 70%, #1a0303 100%)";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    game(userchoice); //call the function
  });
});
