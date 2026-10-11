let btn1 = document.querySelector("button");
let show = document.querySelector("#result");
let name = document.querySelector("#username");
let img = document.querySelector("#profil");
let buttons = document.querySelectorAll(".copyarea button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
   let text = btn.previousElementSibling.innerText;
text = text.replace("🦊 ", "");
text = text.replace("👤 ", "");
text = text.replace("🐱 ", "");
text = text.replace("😂 ", "");
text = text.replace("🎥 ", "");

navigator.clipboard.writeText(text);
    });
});
async function pokemoninfo(username) {
let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${username}`);

let infordata = await response.json()
console.log(infordata);
console.log(username)
return infordata
};
async function githubacc(username) {
let response1 = await fetch(`https://api.github.com/users/${username}`)
let infordata1  = await response1.json()
console.log(infordata1)
console.log(name)
return infordata1
}
async function catfactinfor(username) {
    let response2 = await fetch(`https://catfact.ninja/fact`)
    let infordata2 = await response2.json()
    console.log(infordata2)
    console.log(name)
    return infordata2
}
async function jokeinfor(username) {
    let response3 = await fetch("https://official-joke-api.appspot.com/random_joke");
    let infordata3 = await response3.json()
    console.log(infordata3)
    console.log(name)
    return infordata3
}
async function movieinfor(username) {
    let response4 = await fetch(`https://api.tvmaze.com/search/shows?q=${username}`)
    let infordata4 = await response4.json()
    console.log(infordata4)
    console.log(name)
    return infordata4
}

btn1.addEventListener("click" , async() => {
let username = name.value;
let parts = username.split(" ");
let Name = name.value
let command = parts[0];
let value = parts[1];
if(command == "pokemon"){
show.innerText = "⏳ serching pokemon..."
pokemoninfo(value)
let message = await pokemoninfo(value);
show.innerText = `Name : ${message.name}
                  height : ${message.height}
                  weight : ${message.weight}`
img.src = message.sprites.front_default
} else if (command == "github" ) {
show.innerText = "⏳ serching githubaccount..."
let github = await githubacc(value);
show.innerText = `Name : ${github.name}
                  followers : ${github.followers}`
img.src = github.avatar_url
} else if(command == "catfact") {
    show.innerText = "⏳ serching cats fact..."
    let catfact = await catfactinfor();
    show.innerText = `Cat facts 🐱

                      ${catfact.fact}`
} else if(command == "joke") {
    show.innerText = "⏳ serching Joke..."
    let joke = await jokeinfor();
    show.innerText = `😂 Joke

Setup:
${joke.setup}

Punchline:
${joke.punchline}
    `
} else if(command == "movie") {
    show.innerText = "⏳ serching movie..."
    let movie = await movieinfor(value);
show.innerText = `🎬 Movie

🎥 Name : ${movie[0].show.name}
🌍 Language : ${movie[0].show.language}
📡 Status : ${movie[0].show.status}
⭐ Rating : ${movie[0].show.rating.average}`
img.src = movie[0].show.image.medium;

}

});
