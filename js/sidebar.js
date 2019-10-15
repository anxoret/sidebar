let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main-content_default-theme");

function openAndCloseSidebar() {
    if (sidebar.style.display == "none") {
        sidebar.style.display = "block";
        mainContent.style.marginLeft = "180px";
    } else {
        sidebar.style.display = "none";
        mainContent.style.marginLeft = "0px";
    }
};

