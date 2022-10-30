const images = [
    {
        "src": "https://www.techgrapple.com/wp-content/uploads/2016/08/Mountain-lake-nature-background.jpg",
        "title": "A Bay",
        "description": "A beuatiful picture of a bay and a Mountain next to it"
    },
    {
        "src": "https://www.techgrapple.com/wp-content/uploads/2016/08/Nature-Wallpaper-Sky.jpg",
        "title": "A Mountain",
        "description": "A beuatiful night photo of a mountain"
    },
    {
        "src": "https://www.techgrapple.com/wp-content/uploads/2016/08/Boat-Lake-Wallpaper.jpg",
        "title": "A little boat",
        "description": "A picture of a small probably fishing boat docked somewhere in nature"
    },
    {
        "src": "https://www.techgrapple.com/wp-content/uploads/2016/08/Nature-Wallpaper-Cool-building.jpg",
        "title": "A Japanese house",
        "description": "A picture of a Japanese house somewhere in a forest"
    },
    {
        "src": "https://www.techgrapple.com/wp-content/uploads/2016/08/nature-evening-sunset-wallpaper.jpg",
        "title": "A beuatiful sunset",
        "description": "A picture of a sunset over the lake"
    }
]

let preview = document.querySelector('.preview');
let background = document.getElementById('background');
let right = document.getElementById('right');
let left = document.getElementById('left');
let title = document.querySelector('.title');
let description = document.querySelector('.description');
let index = 0;

title.innerText = images[index].title;
description.innerText = images[index].description;

if (images.length > 5) {

    for (i = 0; i < 4; i++) {
        let newImg = document.createElement('img');
        let newTitle = images[i].title;
        let newDescription = images[i].description;
        let newIndex = i;

        newImg.setAttribute('src', images[i].src);
        newImg.setAttribute('class', 'thumbnail');
        preview.appendChild(newImg);
        newImg.onclick = () => {
            index = newIndex;
            background.style.backgroundImage = `url("${newImg.src}")`;
            title.innerText = newTitle;
            description.innerText = newDescription;
            thumbnails.forEach((element) => {
                element.setAttribute('class', 'thumbnail');
            })
            newImg.setAttribute('class', 'thumbnail highlight');
        }
    }
}

else {
    
    for (i = 0; i < images.length; i++) {
        let newImg = document.createElement('img');
        let newTitle = images[i].title;
        let newDescription = images[i].description;
        let newIndex = i;

        newImg.setAttribute('src', images[i].src);
        newImg.setAttribute('class', 'thumbnail');
        preview.appendChild(newImg);
        newImg.onclick = () => {
            index = newIndex;
            background.style.backgroundImage = `url("${newImg.src}")`;
            title.innerText = newTitle;
            description.innerText = newDescription;
            thumbnails.forEach((element) => {
                element.setAttribute('class', 'thumbnail');
            })
            newImg.setAttribute('class', 'thumbnail highlight');
        }
    } 
}

let thumbnails = document.querySelectorAll('.thumbnail');
thumbnails[index].setAttribute('class', 'thumbnail highlight');

right.onclick = () => {
    let newSrc;
    let newTitle;
    let newDescription;

    if (index === images.length - 1) {
        index = 0;
        newTitle = images[index].title;
        newDescription = images[index].description;
        title.innerText = newTitle;
        description.innerText = newDescription;
        newSrc = thumbnails[index].getAttribute('src');
        thumbnails[images.length - 1].setAttribute('class', 'thumbnail');
        thumbnails[index].setAttribute('class', 'thumbnail highlight');
        background.style.backgroundImage = `url("${newSrc}")`;
    }

    else {
        index++;
        newTitle = images[index].title;
        title.innerText = newTitle;
        newDescription = images[index].description;
        description.innerText = newDescription;
        newSrc = thumbnails[index].getAttribute('src');
        thumbnails[index - 1].setAttribute('class', 'thumbnail');
        thumbnails[index].setAttribute('class', 'thumbnail highlight');
        background.style.backgroundImage = `url("${newSrc}")`;
    }
}

left.onclick = () => {
    let newSrc;
    let newTitle;
    let newDescription;


    if (index - 1 < 0) {
        index = images.length - 1;
        newTitle = images[index].title;
        title.innerText = newTitle;
        newDescription = images[index].description;
        description.innerText = newDescription;
        newSrc = thumbnails[index].getAttribute('src');
        thumbnails[index].setAttribute('class', 'thumbnail highlight');
        thumbnails[0].setAttribute('class', 'thumbnail');
        background.style.backgroundImage = `url("${newSrc}")`;
    }

    else {
        index--;
        newTitle = images[index].title;
        title.innerText = newTitle;
        newDescription = images[index].description;
        description.innerText = newDescription;
        newSrc = thumbnails[index].getAttribute('src');
        thumbnails[index].setAttribute('class', 'thumbnail highlight');
        thumbnails[index + 1].setAttribute('class', 'thumbnail');
        background.style.backgroundImage = `url("${newSrc}")`;
    }
}