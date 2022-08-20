let arr=[]
function Movez(id,title,image,rank,year)
{
    this.id=id;
    this.title=title;
    this.image=image;
    this.rank=rank;
    this.year=year;
}

fetch("https://imdb-api.com/en/API/Top250Movies/k_slofgett").then(function(res)
{
  res.json().then(function(data)
  {
    for(let i=0 ; i<20 ;i++)
    {
        let movie=data.items[i]
        let mov=new Movez(movie.id,movie.title,movie.image,movie.rank,movie.year)
        arr.push(mov)
        creatcard(mov)
    }

  })  
})


function creatcard(mov) {
    let div = document.createElement("div");
  
    div.style.width = "200px"
    div.style.height = "auto";
    div.style.background = "#1976d2"
    div.style.color = "black";
    div.style.fontSize = "16.50px"
    div.style.border = "5px solid black"
  
    div.style.margin = "10px"
    document.body.appendChild(document.getElementById("main"))
    let img = document.createElement("img")
    img.src = mov.image
    img.style.width = "100%"
    img.style.height = "100px"
    document.getElementById("container").appendChild(div)
    div.appendChild(img)
  
    let card = document.createElement("p");
    card.textContent = "Id_Number" + " : " + mov.id
    div.appendChild(card)
    card.style.paddingLeft = "5px"
  
  
  
    let card2 = document.createElement("p");
    card2.textContent = "Department" + " : " + mov.title
    div.appendChild(card2)
    card2.style.paddingLeft = "5px"
  
    let card3 = document.createElement("p");
    card3.textContent = "Level" + " : " + mov.year
    div.appendChild(card3)
    card3.style.paddingLeft = "5px"
  
    let card4 = document.createElement("p");
    card4.textContent = "Salary" + " : " + mov.rank;
    div.appendChild(card4)
    card4.style.paddingLeft = "5px"
  
  
  
    }
  