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


var showsList = [{date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
{date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA"},
{date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA"},
{date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA"},
{date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA"},
{date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA"}]

for (let i = 0; i < showsList.length; i++) {
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
    dateContent.innerHTML = showsList [i].date;   
    showsRow.appendChild(dateContent);    

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("shows__list__heading");
    venueHeading.innerText = "VENUE";
    showsRow.appendChild(venueHeading);

    const venueContent = document.createElement("p");
    venueContent.classList.add("shows__list__content");
    venueContent.innerHTML = showsList [i].venue;   
    showsRow.appendChild(venueContent);

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("shows__list__heading");
    locationHeading.innerText = "LOCATION";
    showsRow.appendChild(locationHeading);

    const locationContent = document.createElement("p");
    locationContent.classList.add("shows__list__content");
    locationContent.innerHTML = showsList [i].location;   
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