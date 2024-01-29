document.getElementById('menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function(card) {
        const description = card.dataset.description;
        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("description");
        descriptionElement.textContent = description;
        card.appendChild(descriptionElement);

        card.addEventListener("mouseenter", function() {
            descriptionElement.style.display = "block";
        });

        card.addEventListener("mouseleave", function() {
            descriptionElement.style.display = "none";
        });
    });
});
