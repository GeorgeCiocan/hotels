let nights = prompt("How may nights would you like to stay");
class Hotel {
  constructor(hotel, address, imageUrl) {
    this.hotelName = hotel;
    this.numberOfNights = Math.trunc(Math.random() * 11);
    this.address = address;
    this.image = imageUrl;
  }
  showAvailability = function () {
    if (Number(nights) <= this.numberOfNights) {
      return "I'll reserve";
    } else {
      return `Sorry, no available nights for ${this.hotelName}.`;
    }
  };
}

let hotel1 = new Hotel("Boavista", "Rue du Solei", "htpp://google.com");
let hotel2 = new Hotel("Marriot", "Reagents Park", "");
let hotel3 = new Hotel("Marriot", "Reagents Park", "");

let hotelArray = [hotel1, hotel2, hotel3];

//display logic
for (let i = 0; i < hotelArray.length; i++) {
  let parent = document.createElement("div");
  parent.classList.add("column");
  //creating the image div
  let imageCompartiment = document.createElement("div");
  imageCompartiment.classList.add("image");
  let image = document.createElement("img");
  image.src = hotelArray[i].image;
  imageCompartiment.appendChild(image);
  //creating the info div
  let data = document.createElement("div");
  data.classList.add("information");
  let nameP = document.createElement("p");
  nameP.textContent = hotelArray[i].hotelName;
  let addressP = document.createElement("p");
  addressP.textContent = hotelArray[i].address;
  let nightsP = document.createElement("p");
  nightsP.textContent = hotelArray[i].numberOfNights;
  data.appendChild(nameP);
  data.appendChild(nightsP);
  data.appendChild(addressP);
  //apending child nodes to parent node
  parent.appendChild(imageCompartiment);
  parent.appendChild(data);
  console.log(parent);

  //APENDING EACH PARENT TO THE DOM
  let page = document.getElementsByTagName("main")[0];
  page.appendChild(parent);
  console.log(page);
}
