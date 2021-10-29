let people = [
    {
        "name" : "John",
        "testimonial" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum tempora molestiae ullam quas aspernatur maxime.",
        "img" : "img/f1.jfif"
    },
    {
        "name" : "Kate",
        "testimonial" : "Take some away consectetur adipisicing elit. Laborum tempora molestiae ullam quas aspernatur maxime.",
        "img" : "img/f2.jfif"
    },
    {
        "name" : "Peter",
        "testimonial" : "Lorem ipsum dolor sit amet,Laborum tempora molestiae ullam quas aspernatur maxime.",
        "img" : "img/f3.jfif"
    },
    {
        "name" : "Sally",
        "testimonial" : "Lorem ipsum dolor sit amet, Fun in the sun baby consectetur adipisicing elit. Laborum tempora molestiae ullam quas aspernatur maxime.",
        "img" : "img/f4.jfif"
    },
    {
        "name" : "May",
        "testimonial" : "consectetur adipisicing elit. Laborum tempora molestiae ullam quas aspernatur maxime.",
        "img" : "img/f5.jfif"
    }
]

let currentIndexElement = document.getElementById("index");
let currentIndexValue = currentIndexElement.innerHTML;

let currentImagineElement = document.getElementById("imagine");
let currentClientName = document.getElementById("client-name");
let currentClientTest = document.getElementById("client-test");

function next(){
    if(currentIndexValue === people.length - 1){
        currentIndexValue = 0;
    }else{
        currentIndexValue++;
    }

    currentImagineElement.src = people[currentIndexValue].img;
    currentClientName.innerHTML = people[currentIndexValue].name;
    currentClientTest.innerHTML = people[currentIndexValue].testimonial;
}

function previous(){
    if(currentIndexValue === 0){
        currentIndexValue = people.length - 1;
    }else{
        currentIndexValue--;
    }

    currentImagineElement.src = people[currentIndexValue].img;
    currentClientName.innerHTML = people[currentIndexValue].name;
    currentClientTest.innerHTML = people[currentIndexValue].testimonial;
}