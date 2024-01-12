



function selectSignUp() {
    var a = document.getElementById("registerationForm");
    a.classList.add("d-none");
    var residents = document.getElementById("residents");
    var estateManager = document.getElementById("estateManager");
    var excos = document.getElementById("excos");
    var artisanSecurity = document.getElementById("artisanSecurity");
    var scrollText = document.getElementById("scrollText");
    scrollText.classList.add("d-none");

    residents.addEventListener("click", function() {
         a.classList.remove("d-none");
         let showResidents = document.getElementsByClassName("landlordOrTenant");
         showResidents[0].classList.remove("d-none");
         let hideArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
         hideArtisanSecurity[0].classList.add("d-none");
         scrollText.classList.remove("d-none");
    });
    artisanSecurity.addEventListener("click", function() {
        a.classList.remove("d-none"); 
        let showArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        showArtisanSecurity[0].classList.remove("d-none");
        let hideResidents = document.getElementsByClassName("landlordOrTenant");
        hideResidents[0].classList.add("d-none");
        scrollText.classList.remove("d-none");
    })
    
}
selectSignUp();


