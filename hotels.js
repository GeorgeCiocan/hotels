//prompt to find out how many nights want the guests to spend in the hotel
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
      let button = document.createElement("button");
      button.classList.add("btn");
      button.textContent = "I'll reserve";
      return button;
    } else {
      let message = document.createElement("p");
      message.textContent = `Sorry, no available nights for ${this.hotelName}.`;
      return message;
    }
  };
}

//Creating each hotel
let hotel1 = new Hotel(
  "Grand Hotel",
  "Vienna",
  "https://thumbnails.trvl-media.com/eqOrHTgHL7blub7013x9X1qKMOE=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/1000000/30000/23700/23687/1266f429_z.jpg"
);
let hotel2 = new Hotel(
  "Marriot",
  "Reagents Park",
  "https://www.marriott.com/marriottassets/marriott/LONRP/lonrp-exterior-0125-hor-clsc.jpg"
);
let hotel3 = new Hotel(
  "Hilton",
  "Budapesta",
  "https://www.hiltonhotels.de/assets/img/hotels/BUDWEHI_Hilton_Budapest_City/preview-hotelext001-thumb-1.jpg"
);

let hotelArray = [hotel1, hotel2, hotel3];

//display logic
for (let i = 0; i < hotelArray.length; i++) {
  //creating the parent of each hotel
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
  nightsP.textContent = hotelArray[i].numberOfNights + " available nights";
  data.appendChild(nameP);
  data.appendChild(addressP);
  data.appendChild(nightsP);
  //creating the availability div
  let availability = document.createElement("div");
  availability.classList.add("availability");
  availability.appendChild(hotelArray[i].showAvailability());
  //apending child nodes to parent node
  parent.appendChild(imageCompartiment);
  parent.appendChild(data);
  parent.appendChild(availability);
  console.log(parent);

  //APENDING EACH PARENT TO THE DOM
  let page = document.getElementsByTagName("main")[0];
  page.appendChild(parent);
}
