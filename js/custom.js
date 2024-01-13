// Sign up category rgistration field starts

function selectSignUp() {
    var a = document.getElementById("registerationForm");
    a.classList.add("d-none");
    var residents = document.getElementById("residents");
    var subResident = document.getElementById("sub-resident");
    var estateManager = document.getElementById("estateManager");
    var excos = document.getElementById("excos");
    var artisanSecurity = document.getElementById("artisanSecurity");
    var scrollText = document.getElementById("scrollText");
    scrollText.classList.add("d-none");

    residents.addEventListener("click", function () {
        a.classList.remove("d-none");
        let showResidents = document.getElementsByClassName("landlordOrTenant");
        showResidents[0].classList.remove("d-none");
        let hideHohId = document.getElementById("hoh-id-field");
        let hideArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        hideHohId.classList.add("d-none");
        hideArtisanSecurity[0].classList.add("d-none");
        scrollText.classList.remove("d-none");
    });
    subResident.addEventListener("click", function () {
        a.classList.remove("d-none");
        let showHohId = document.getElementById("hoh-id-field");
        showHohId.classList.remove("d-none");
        let hideResidents = document.getElementsByClassName("landlordOrTenant");
        let hideArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        hideResidents[0].classList.add("d-none");
        hideArtisanSecurity[0].classList.add("d-none");
        scrollText.classList.remove("d-none");


    })
    artisanSecurity.addEventListener("click", function () {
        a.classList.remove("d-none");
        let showArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        showArtisanSecurity[0].classList.remove("d-none");
        let hideResidents = document.getElementsByClassName("landlordOrTenant");
        let hideHohId = document.getElementById("hoh-id-field");
        hideHohId.classList.add("d-none");
        hideResidents[0].classList.add("d-none");
        scrollText.classList.remove("d-none");
    })

}
selectSignUp();
// Sign up category rgistration field ends

// Head Of House info controller & HOH Id validation start
function displayHohInfo() {
    var hohInfo = document.querySelector("#hoh-info");
    hohInfo.classList.add("d-none");
}
displayHohInfo();

var verifyHohId = document.querySelector("#hohId + input");
verifyHohId.addEventListener("blur", showInfo);

function showInfo() {
    if (verifyHohId.value == "") {
        document.querySelector("#id-error-message").innerHTML = "<b><i>Please provide your Head Of House Id</i></b>";
        document.querySelector("#hoh-info").classList.add("d-none");
    } else {
        document.querySelector("#hoh-info").classList.remove("d-none");
        document.querySelector("#id-error-message").classList.add("d-none");
    }
}
// Head Of House info controller & HOH Id validation end