var photos = ["SOLAR ECLIPSE", "LUNAR ECLIPSE", "MODEL OF ECLIPSE", "SOLAR AND LUNAR SIDE BY SIDE"];
var photosimg = ["image.webp", "imagelunar.jpeg", "models.webp","side.jpg"];
var i = 0;
function NextPhoto(){
    document.getElementById("photoname").innerHTML=photos[i];
    document.getElementById("images").src=photosimg[i];
    i=i+1;
    
    
    
   if (i==4) {
       i=0;
   }
    
    
    
}





