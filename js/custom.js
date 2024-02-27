function chooseVisitorType() {
    let a = document.getElementById("visitor-type");
    let companyInfo = document.getElementsByClassName("company-info");
    switch (a.selectedIndex) {
        case 1:
            for (const x in companyInfo) {
                x.classList.add("d-none");
            }
            break;
        case 2:
            for (const x in companyInfo) {
                x.classList.add("d-none");
            }
            break;
        case 3:
            for (const x in companyInfo) {
                x.classList.remove("d-none");
            }

            break;

    };


};