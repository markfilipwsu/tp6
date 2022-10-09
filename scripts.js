// Javascript for TP5


window.onload = function() {

  document.querySelector("#heroimage h1").classList.add("tp");

  document.querySelector("#heroimage h1").onclick = function() {

    this.classList.toggle("black");

  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
    document.querySelector("#recipeColumns #KitchenEquipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
      document.querySelector("#recipeColumns #Directions").onclick = function() {
    this.classList.toggle("tpShow");
  }
      document.querySelector("#recipeColumns #ingredients ol").innerHTML += "<li>A Hunger for Cookies</li>";

} // end window function