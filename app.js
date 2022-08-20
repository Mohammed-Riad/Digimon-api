let digimons = [];

function Digimon(name, level, image) {
    this.name = name;
    this.level = level;
    this.image = image;
}


fetch('https://digimon-api.herokuapp.com/api/digimon').then(function (respone) {
    respone.json().then(function (data) {
        for (let i = 0; i < 20; i++) {
            let digimon = new Digimon(data[i].name,data[i].level,data[i].img);
            digimons.push(digimon);
            creatcard(digimon);
        }
        console.table(digimons);
    })
})

function creatcard(digimon) {
    let div = document.createElement("div");
  
    div.style.width = "200px"
    div.style.height = "auto";
    div.style.background = "#1976d2"
    div.style.color = "black";
    div.style.fontSize = "16.50px"
    div.style.border = "5px solid black"
  
    div.style.margin = "10px"
    document.body.appendChild(document.getElementById("main"))
    
    let img = document.createElement("img");
    img.src = digimon.image
    img.style.width = "100%"
    img.style.height = "100px"
    document.getElementById("container").appendChild(div)
    div.appendChild(img)
  
    let card = document.createElement("p");
    card.textContent = "Id_Number" + " : " + digimon.name
    div.appendChild(card)
    card.style.paddingLeft = "5px"
  
    let card1 = document.createElement("p");
    card1.textContent = "Name" + " : " + digimon.level
    div.appendChild(card1)
    card1.style.paddingLeft = "5px"

  }
  