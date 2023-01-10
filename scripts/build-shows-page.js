function displayShows(data) {
    const sectShows = document.querySelector(".shows__wrapper");
   
    const divContain = document.createElement("div");
    divContain.classList.add("shows__container");
    sectShows.appendChild(divContain);
    
    const divHeader = document.createElement("div");
    divHeader.classList.add("shows__header");
    divContain.appendChild(divHeader);
    
    const dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__header--item");
    dateHeader.innerText = "DATE";
    divHeader.appendChild(dateHeader);
    
    const venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__header--item");
    venueHeader.innerText = "VENUE";
    divHeader.appendChild(venueHeader);
    
    const locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__header--item");
    locationHeader.innerText = "LOCATION";
    divHeader.appendChild(locationHeader);
    
    const buttonHeader = document.createElement("button");
    buttonHeader.classList.add("shows__list__button");
    buttonHeader.innerText = "BUY TICKETS";
    buttonHeader.classList.add("shows__list__button--header");
    divHeader.appendChild(buttonHeader);

    for(let i=0; i<data.length; i++) {

    const showsRow = document.createElement("div");
    showsRow.classList.add("shows__list");
    divContain.appendChild(showsRow);

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("shows__list__heading");
    dateHeading.innerText = "DATE";
    showsRow.appendChild(dateHeading);

    const dateContent = document.createElement("p");
    dateContent.classList.add("shows__list__content");
    dateContent.classList.add("shows__list__content--bolded");
    const options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
    dateContent.innerHTML = new Date (data[i].date).toLocaleDateString("en", options).split(',').join('');;   
    showsRow.appendChild(dateContent);    

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("shows__list__heading");
    venueHeading.innerText = "VENUE";
    showsRow.appendChild(venueHeading);

    const venueContent = document.createElement("p");
    venueContent.classList.add("shows__list__content");
    venueContent.innerHTML = data[i].place;   
    showsRow.appendChild(venueContent);

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("shows__list__heading");
    locationHeading.innerText = "LOCATION";
    showsRow.appendChild(locationHeading);

    const locationContent = document.createElement("p");
    locationContent.classList.add("shows__list__content");
    locationContent.innerHTML = data[i].location;   
    showsRow.appendChild(locationContent);

    const button = document.createElement("button");
    button.classList.add("shows__list__button");
    button.innerText = "BUY TICKETS";
    showsRow.appendChild(button);
    }

    let showSelected = document.getElementsByClassName("shows__list");
    for (let i = 0; i < showSelected.length; i++ ) {
    showSelected[i].addEventListener("click", function () {
        let clicked = document.getElementsByClassName("shows__list--selected");
        if (clicked.length > 0) {
            clicked[0].className = clicked[0].className.replace(" shows__list--selected", "");
        }
        this.className += " shows__list--selected";
    });
}
}

const api = `https://project-1-api.herokuapp.com/`;
const apiKey = "?api_key=db1690a5-b9b9-4a90-a674-a9f6912c02d1";

const showsData = axios.get(api + 'showdates' + apiKey)
showsData.then(result => {
    displayShows(result.data);
});