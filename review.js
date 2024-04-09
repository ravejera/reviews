const people = [
    {
        image: "https://media.istockphoto.com/id/1460896518/photo/beautiful-middle-aged-woman.webp?b=1&s=170667a&w=0&k=20&c=UpEZVDcU8J30F3OgX-ysOCpZCvRkg83syWBzO5nnea8=",
        name: "susan",
        job: "software developer",
        position: "senior",
        id: 1,
    },
    {
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2VzfGVufDB8fDB8fHww",
        name: "vicky",
        job: "ux desiner",
        position: "mid",
        id: 1,
    },
    {
        image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
        name: "riyadh",
        job: "assitant manager",
        position: "senior",
        id: 1,
    },
    {
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fHww",
        name: "albert",
        job: "boss",
        position: "CTO",
        id: 1,
    },
    {
        image: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
        name: "linda",
        job: "software developer",
        position: "junior",
        id: 1,
    },
];

const name = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const img = document.querySelector(".personal-img");


const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem)
   
});

const showPerson = (person) => {
    const item = people[person]
    img.src = item.image;
    job.textContent = item.job;
    info.textContent = item.position;
    name.textContent = item.name;

}

rightBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > people.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
});
leftBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = people.length - 1;
    }
    showPerson(currentItem)
});

