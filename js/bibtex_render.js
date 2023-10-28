window.addEventListener("DOMContentLoaded", (event) => {

    const bibtex = document.getElementsByClassName("bibtex-toggle");
    for (let i = 0; i < bibtex.length; i++) {
        bibtex[i].addEventListener("click", _toggleVisibility);
    }

    function _toggleVisibility(e) {
        // Toggle the visibility of the bibtex entry
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("hidden");
    }
});
