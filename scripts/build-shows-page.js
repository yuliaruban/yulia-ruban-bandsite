function displayShows(data) {
    const sectionShows = document.querySelector(".shows__wrapper");
   
    const divContainer = document.createElement("div");
    divContainer.classList.add("shows__container");
    sectionShows.appendChild(divContainer);
    
    const divHeader = document.createElement("div");
    divHeader.classList.add("shows__header");
    divContainer.appendChild(divHeader);
    
    const dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__header--item");
    dateHeader.innerText = "DATE";
    
    const venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__header--item");
    venueHeader.innerText = "VENUE";
    
    const locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__header--item");
    locationHeader.innerText = "LOCATION";
    
    const buttonHeader = document.createElement("button");
    buttonHeader.classList.add("shows__list__button", "shows__list__button--header");
    buttonHeader.innerText = "BUY TICKETS";

    divHeader.append(dateHeader, venueHeader, locationHeader, buttonHeader);

    for(let i=0; i<data.length; i++) {

    const showsRow = document.createElement("div");
    showsRow.classList.add("shows__list");
    divContainer.appendChild(showsRow);

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("shows__list__heading");
    dateHeading.innerText = "DATE";

    const dateContent = document.createElement("p");
    dateContent.classList.add("shows__list__content", "shows__list__content--bolded");
    const options = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
    dateContent.innerHTML = new Date (data[i].date).toLocaleDateString("en", options).split(',').join('');;   

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("shows__list__heading");
    venueHeading.innerText = "VENUE";

    const venueContent = document.createElement("p");
    venueContent.classList.add("shows__list__content");
    venueContent.innerHTML = data[i].place;   

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("shows__list__heading");
    locationHeading.innerText = "LOCATION";

    const locationContent = document.createElement("p");
    locationContent.classList.add("shows__list__content");
    locationContent.innerHTML = data[i].location;   

    const button = document.createElement("button");
    button.classList.add("shows__list__button");
    button.innerText = "BUY TICKETS";
    
    showsRow.append(dateHeading, dateContent, venueHeading, venueContent, locationHeading, locationContent, button);
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