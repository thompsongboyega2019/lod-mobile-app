
// Sign up category registration field starts
function selectSignUp() {
    var a = document.getElementById("registerationForm");
    a.classList.add("d-none");
    var residents = document.getElementById("residents");
    var estateManager = document.getElementById("estateManager");
    var excos = document.getElementById("excos");
    var artisanSecurity = document.getElementById("artisanSecurity");
    var hohField = document.getElementById("hoh-id-field");
    hohField.classList.add("d-none");
    var scrollText = document.getElementById("scrollText");
    scrollText.classList.add("d-none");
    let generalFields = document.getElementsByClassName("general-fields");

    residents.addEventListener("click", function () {
        residents.getElementsByClassName("bg-white")[0].classList.add("category-active", "shadow-lg");
        a.classList.remove("d-none");
        let showResidents = document.getElementsByClassName("landlordOrTenant");
        showResidents[0].classList.remove("d-none");
        showResidents[1].classList.add("d-none");
        for (const x of generalFields) {
            x.classList.add("d-none");
        }
        artisanSecurity.getElementsByClassName("bg-white")[0].classList.remove("category-active", "shadow-lg");
        excos.getElementsByClassName("bg-white")[0].classList.remove("category-active", "shadow-lg");
        let hideArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        hideArtisanSecurity[0].classList.add("d-none");
        let hideExcos = document.getElementsByClassName("excos");
        hideExcos[0].classList.add("d-none");
        scrollText.classList.remove("d-none");
    });
    artisanSecurity.addEventListener("click", function () {
        artisanSecurity.getElementsByClassName("bg-white")[0].classList.add("category-active", "shadow-lg");
        a.classList.remove("d-none");
        let showArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        showArtisanSecurity[0].classList.remove("d-none");
        let hideResidents = document.getElementsByClassName("landlordOrTenant");
        for (const x of hideResidents) {
            x.classList.add("d-none");
        }
        let hideExcos = document.getElementsByClassName("excos");
        hideExcos[0].classList.add("d-none");
        for (const x of generalFields) {
            x.classList.remove("d-none");
        }
        residents.getElementsByClassName("bg-white")[0].classList.remove("category-active", "shadow-lg");
        excos.getElementsByClassName("bg-white")[0].classList.remove("category-active", "shadow-lg");
        scrollText.classList.remove("d-none");
        hohField.classList.add("d-none");
    });
    excos.addEventListener("click", function () {
        excos.getElementsByClassName("bg-white")[0].classList.add("category-active", "shadow-lg"); 
        a.classList.remove("d-none");
        let hideResidents = document.getElementsByClassName("landlordOrTenant");
        for (const x of hideResidents) {
            x.classList.add("d-none");
        }
        let hideArtisanSecurity = document.getElementsByClassName("artisanOrSecurity");
        hideArtisanSecurity[0].classList.add("d-none");
        for (const x of generalFields) {
            x.classList.add("d-none");
        }
        let hideExcos = document.getElementsByClassName("excos");
        hideExcos[0].classList.remove("d-none");
        residents.getElementsByClassName("bg-white")[0].classList.remove("category-active", "shadow-lg");
        artisanSecurity.getElementsByClassName("bg-white")[0].classList.remove("category-active", "shadow-lg");
        scrollText.classList.add("d-none");
        hohField.classList.add("d-none");
    })

};
selectSignUp();
// Sign up category registration field ends


// Account type option controller starts 
function chooseAccountType() {
    let generalFields = document.getElementsByClassName("general-fields");
    let showResidents = document.getElementsByClassName("landlordOrTenant");
    var hohField = document.getElementById("hoh-id-field");
    let a = document.getElementById("account-type");
    switch (a.selectedIndex) {
        case 1:
            for (const x of generalFields) {
                x.classList.remove("d-none");
            };
            hohField.classList.add("d-none");
            showResidents[1].classList.remove("d-none");
            break;
        case 2:
            for (const x of generalFields) {
                x.classList.remove("d-none");
            };
            hohField.classList.remove("d-none");
            showResidents[1].classList.add("d-none");
            break;
        case 0:
            for (const x of generalFields) {
                x.classList.add("d-none");
            };
            hohField.classList.add("d-none");
            showResidents[1].classList.add("d-none");
            break;
    };
};
// Account type option controller ends 



function chooseBill() {
    var a = document.getElementById("chooseBill");
    let b = document.querySelector("#billamount + input");
    switch (a.selectedIndex) {
        case 1:
            b.value == a.selectedIndex.value;
            break;
            case 2:
                b.value == a.selectedIndex.value;
                break;
        default:
            break;
    }
}

// Register Screen - Head Of House info controller & HOH Id validation start
function displayHohInfo() {
    var hohInfo = document.querySelector("#hoh-info");
    hohInfo.classList.add("d-none");
};
displayHohInfo();

var verifyHohId = document.querySelector("#hohId + input");
verifyHohId.addEventListener("blur", showInfo);
// verifyHohId.addEventListener("focus", showInfoTwo);

function showInfo() {
    if (verifyHohId.value == "" || verifyHohId.value.length < 1) {
        document.querySelector("#id-error-message").innerHTML = "<b><i>Please provide your Head Of House Id</i></b>";
        document.querySelector("#hoh-info").classList.add("d-none");
        return false;
    } else {
        document.querySelector("#hoh-info").classList.remove("d-none");
        document.querySelector("#id-error-message").classList.add("d-none");
    }
};
// Head Of House info controller & HOH Id validation end


// Register Screen - User Information controller & User Id Validation start
function displayUserInfo() {
    let userInfo = document.querySelector("#user-info");
    userInfo.classList.add("d-none");
};
displayUserInfo();

var verifyUserId = document.querySelector("#userId + input");
verifyUserId.addEventListener("blur", function () {
    if (verifyUserId.value == "" || verifyUserId.value.length < 1) {
        document.querySelector("#userId-error-message").innerHTML = "<b><i>Please provide your Id</i></b>";
        document.querySelector("#user-info").classList.add("d-none");
    } else {
        document.querySelector("#user-info").classList.remove("d-none");
        document.querySelector("#userId-error-message").classList.add("d-none").classList.add("animate");
    }
});






