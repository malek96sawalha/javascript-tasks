const cards = [
    {
        header: "First Card",
        content: "this is the first card’s content",
        image: "./images.jpg"
    },
    {
        header: "Second Card",
        content: "this is the second card’s content",
        image: "./images.jpg"
    },
    {
        header: "Third Card",
        content: "This is the third card’s content",
        image: "./images.jpg"
    },
    {
        header: "Fourth Card",
        content: "This is the fourth card’s content",
        image: "./images.jpg"
    }
];
    for (let i = 0; i < cards.length; i++){
    const card =document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("h3");
    header.textContent = cards[i].header;

    const content = document.createElement("p");
    content.textContent = cards[i].content;

    const image = document.createElement("img");
    image.src = cards[i].image;


    card.appendChild(header);
    card.appendChild(content);
    card.appendChild(image);

    document.body.appendChild(card)
    card.style.cssText = "display: inline-block; width:40%;background-color:orange; border:1px solid;border-radius:15px;gap:15px; height:300px;gap:15px;text-align:center;display: inline-block;"
    
}   