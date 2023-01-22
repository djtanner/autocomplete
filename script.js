let countries = [];

const countryListElement = document.querySelector("#country-list");
const countryInputElement = document.querySelector("#country-input");

function fetchCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json()
    .then((data) => {
        countries = data.map(x => x.name.common);
        countries.sort();
        //loadData(countries, countryListElement);
        //console.log(countries);
    }))
}

fetchCountries();


// load the dropdown element with li html elements
function loadData(data,element){
    
    if(data) {
        element.innerHTML = "";
        let innerElement = "";
        data.forEach((item) => {
            innerElement +=
            `<li>${item}</li>`;
        });
        element.innerHTML = innerElement;
    }
}


// filter the dropdown based on input in search box
function filteredData(data, searchText){
    if (searchText.length > 0){
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
    } else {return []}
    
}




//filter the dropdown everytime input is updated as user types
countryInputElement.addEventListener("input", function(){
    
    const filterData = filteredData(countries,countryInputElement.value);
    
    loadData(filterData, countryListElement);}
)


//select the value from the dropdown and send it to the input field
countryListElement.addEventListener("click", function(e){
    selection = (e.target.innerHTML);
   
    countryInputElement.value = selection;

})


