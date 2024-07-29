window.addEventListener("DOMContentLoaded", (event) => {
    const authors = document.getElementsByClassName("author");
    for (let i = 0; i < authors.length; i++) {
        if (authors[i].innerText === "Aman Sharma") {
            authors[i].classList.add("highlight");
        }
    }
});
