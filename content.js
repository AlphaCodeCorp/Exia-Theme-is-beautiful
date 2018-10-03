var image = new Image();
 
image.onload = function()
{
   document.getElementById("logo").src = image.src;
}
console.log("Salut toi qui inspecte !")
image.src = image.src = "https://i.tween.pics/v1/https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/2016/logos_ecoles/exia_cesi_360.jpg";