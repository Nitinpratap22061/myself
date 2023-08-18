const button = document.querySelector(".container .btn");
console.log(button)
const memeAuthor = document.querySelector(".container .meme-author");
const image = document.querySelector(".container img");
console.log(image)
const memeTitle = document.querySelector(".container .meme-title");
console.log(memeTitle)


function updateDetails(url, title, author) {
    image.setAttribute("src", url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `meme by :- ${author}`;

}

function generateMeme() {
    fetch("https://meme-api.com/gimme/dankmemes").then((response) => {
        return response.json()
    }).then((data) => {
        updateDetails(data.url, data.title, data.author)
    });

};
generateMeme();

// button.addEventListener("click", generateMeme);



