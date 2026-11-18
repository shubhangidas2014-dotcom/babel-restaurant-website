var yearElem = document.getElementById("year");
if (yearElem) {
    yearElem.innerHTML = new Date().getFullYear();
}

function filterMenu(cat, btn) {
    var items = document.querySelectorAll(".menu-item");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemCat = item.getAttribute("data-category");

        if (cat === "all" || itemCat === cat) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

var form = document.getElementById("reservationForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var nameVal = document.getElementById("name").value;
        var branchVal = document.getElementById("branch").value;
        var dateVal = document.getElementById("date").value;

        alert("Thank you " + nameVal + "! Your table request at " + branchVal + " for " + dateVal + " was received.");
        form.reset();
    });
}