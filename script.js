const collection = [
  {
    "id": "1",
    "who_passed_it_down_to_me": "GREAT AUNT TO MOM, MOM TO ME",
    "year": 1960,
    "brand": "ARLY",
    "favorite_thing_about_it": "CHANGEABLE HEADS",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "2",
    "who_passed_it_down_to_me": "MY MOM",
    "year": 2007,
    "brand": "HILLARD & HANSON",
    "favorite_thing_about_it": "CHANGEABLE STRAPS",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "3",
    "who_passed_it_down_to_me": "MY MOM",
    "year": 2007,
    "brand": "HILLARD & HANSON",
    "favorite_thing_about_it": "CHANGEABLE STRAPS",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "5",
    "who_passed_it_down_to_me": "CHRISTMAS PRESENT FROM MY ROOMMATE",
    "year": 2019,
    "brand": "GOGOEY",
    "favorite_thing_about_it": "BROWN LEATHER STRAP",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "6",
    "who_passed_it_down_to_me": "MY GRANDMOTHER",
    "year": 2005,
    "brand": "SKAGEN",
    "favorite_thing_about_it": "DUAL TONE",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "7",
    "who_passed_it_down_to_me": "MY MOM",
    "year": 2001,
    "brand": "HILLARD & HANSON",
    "favorite_thing_about_it": "SHAPE OF THE DIAL AND THE CHUNKY STRAP",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "8",
    "who_passed_it_down_to_me": "MY MOM",
    "year": 2002,
    "brand": "SEIKO",
    "favorite_thing_about_it": "FIRST WATCH FROM MY MOM",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "4",
    "who_passed_it_down_to_me": "I BOUGHT IT",
    "year": 1992,
    "brand": "SEIKO",
    "favorite_thing_about_it": "IT'S A DIGITAL WATCH",
    "material": "STAINLESS STEEL"
  },
  {
    "id": "9",
    "who_passed_it_down_to_me": "MY MOM",
    "year": 2004,
    "brand": "HILLARD & HANSON",
    "favorite_thing_about_it": "FUNKY AND DOTTED STRAP",
    "material": "STAINLESS STEEL"
  }
];

const subcollection = [
{
  "id" : 1,
  "color": "CORAL",
  "pattern": "DECORATIVE SWIRL"
},
{
  "id" : 2,
  "color": "BLACK",
  "pattern": "STARS"
},
{
  "id" : 3,
  "color": "GOLD",
  "pattern": "LINES IN A SEMI-CIRCLE DIAL"
},
{
  "id" : 4,
  "photo": "../imgs/wh4.png",
  "color": "SILVER",
  "pattern": "LINES IN TRIANGULAR DIAL"
},
{
  "id" : 5,
  "photo": "../imgs/wh5.png",
  "color": "TEAL",
  "pattern": "DECORATIVE LEAF SWASHES"
},
{
  "id" : 6,
  "photo": "../imgs/wh6.png",
  "color": "BROWN",
  "pattern": "DECORATIVE SWIRL"
},
{
  "id" : 7,
  "photo": "../imgs/wh7.png",
  "color": "SILVER",
  "pattern": "LINES IN A SEMI-CIRCLE DIAL"
},
{
  "id" : 8,
  "photo": "../imgs/wh8.png",
  "color": "GOLD",
  "pattern": "LINES IN A SEMI-CIRCLE DIAL"
},
{
  "id" : 9,
  "photo": "../imgs/ws1.png",
  "color": "RED",
  "pattern": "FLORAL"
},
{
  "id" : 10,
  "photo": "../imgs/ws2.png",
  "color": "ORANGE",
  "pattern": "CROSS-HATCH"
},
{
  "id" : 11,
  "photo": "../imgs/ws3.png",
  "color": "OLIVE",
  "pattern": "FLORAL"
},
{
  "id" : 12,
  "photo": "../imgs/ws4.png",
  "color": "MAROON",
  "pattern": "FLORAL"
},
{
  "id" : 13,
  "photo": "../imgs/ws5.png",
  "color": "BROWN",
  "pattern": "SHIMMERY"
},
{
  "id" : 14,
  "photo": "../imgs/ws6.png",
  "color": "OLIVE",
  "pattern": "SHIMMERY"
},
{
  "id" : 15,
  "photo": "../imgs/ws7.png",
  "color": "BEIGE",
  "pattern": "CROSS-HATCH"
},
{
  "id" : 16,
  "photo": "../imgs/ws8.png",
  "color": "TAN",
  "pattern": "FLORAL"
},
{
  "id" : 17,
  "photo": "../imgs/ws9.png",
  "color": "OLIVE",
  "pattern": "FLORAL"
},
{
  "id" : 18,
  "photo": "../imgs/ws10.png",
  "color": "OLIVE",
  "pattern": "FLORAL"
},
{
  "id" : 19,
  "photo": "../imgs/ws11.png",
  "color": "GREY",
  "pattern": "FLORAL"
}
];

var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() - 12) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

// referred to various youtube tutorials on template literals and ChatGPT to help construct the eventListener and use of mouseover event

document.addEventListener("DOMContentLoaded", function(){
  const data = document.getElementById("data");
  const watchImg = document.querySelectorAll(".watches img");

  watchImg.forEach(image=>{
    image.addEventListener("mouseover", function(){
      const watchId = image.getAttribute("data-watch-id"); 
      
      const watch = collection.find(w => w.id === watchId.toString());
      if (watch){
        const dataHTML = `
        <table>
          <tr>
            <th>Brand</th>
            <td> ${watch.brand}
          </tr>
          <tr>
            <th>Year</th>
            <td>${watch.year}
          </tr>
          <tr>
            <th>From Who</th>
            <td>${watch.who_passed_it_down_to_me}
          </tr>
          <tr>
            <th>Favorite Thing</th>
            <td>${watch.favorite_thing_about_it}
          </tr>
          <tr>
            <th> Material</th>
            <td>${watch.material}
          </tr>
        </table>
        `;
        data.innerHTML = dataHTML;
      } else {
        data.innerHTML = "Watch Details Not Found."
      }
    });
  });
});



// w3schools tutorial on image gallery slideshows
let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

  console.log(subcollection[slideIndex-1].pattern);

  const datasub = document.getElementById("datasub");
  const subImg = document.querySelectorAll(".slideshow");

  subImg.forEach(image=>{
    image.addEventListener("click", function(){
      const subIndex = slideIndex -1;
      const subId = subcollection[subIndex].id;
      const sub = subcollection.find(w => w.id === subId);
      if (sub){
        const datasubHTML = `
        <table>
          <tr>
            <th>color</th>
            <td> ${sub.color}
          </tr>
          <tr>
            <th>pattern</th>
            <td> ${sub.pattern}
          </tr>
        </table>
        `;
        datasub.innerHTML = datasubHTML;
      } else {
        datasub.innerHTML = "Details Not Found."
      }
    });
  });

}

