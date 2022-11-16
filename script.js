//SEARCH BUTTON HANDLER
let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
    let countryInput = document.getElementById("country-input").value;
    let countryName = countryInput;
    let countyURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(countyURL);
    fetch(countyURL).then((Response) => Response.json()).then((data) => {
        // console.log(data[0]);
        // console.log(data[0].name.common);
        // console.log(data[0].name.official);
        // console.log(data[0].capital[0]);
        // console.log(data[0].population);
        // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        // console.log(data[0].flags.svg);

        result.innerHTML = 
        `<div class="row mt-5">
            <div class="col-md-6 mt-3">
                <h4 class="heading-info">Information</h4>
                <ul class="list-group">
                        <li class="list-group-item">Name : ${data[0].name.common}</li>
                        <li class="list-group-item">Official Name : ${data[0].name.official}</li>
                        <li class="list-group-item">Capital City : ${data[0].capital[0]}</li>
                        <li class="list-group-item">Population : ${data[0].population}</li>
                        <li class="list-group-item">Native Language : ${Object.values(data[0].languages).toString().split(",").join(", ")}</li>
                </ul>
            </div>
            <div class="col-md-6 mt-3">
                <h4>Flag</h4>
                <img class="img-fluid flag-img" src="${data[0].flags.svg}">
            </div>
        </div>`
    })
})