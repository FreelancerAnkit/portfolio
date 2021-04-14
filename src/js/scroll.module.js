export function scrollToView() {
    let skills = document.getElementById("skills");
    let reviews = document.getElementById("reviews");
    let connect = document.getElementById("connect");

    skills.addEventListener("click", function () {
        document.getElementById('div-skills').scrollIntoView({
            behavior: 'smooth'
        });
    });
    reviews.addEventListener("click", function () {
        document.getElementById('div-reviews').scrollIntoView({
            behavior: 'smooth'
        });
    });
    connect.addEventListener("click", function () {
        document.getElementById('div-connect').scrollIntoView({
            behavior: 'smooth'
        });
    });
}