/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdownMenu() {
    document.getElementById("navbar-menu-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-down-menu')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


// Apply active class to navbar
(function() {
    var nav = document.getElementById('navbar'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname.split('/')[1];
    for (var i = 0; i < anchor.length; i++) {
        if(anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
})();
