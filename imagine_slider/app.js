let imagines = ["one_piece_1.jpg", "one_piece_2.jpg", "one_piece_3.jpg", "one_piece_4.jpg"];
let currentImagine = document.getElementById("imagine");
let currentImagineUrl = currentImagine.src.slice(currentImagine.src.indexOf("one"));
let indexOfCurrentImagine = imagines.indexOf(currentImagineUrl);

function previous(){
    if(indexOfCurrentImagine === 0)
    {
        indexOfCurrentImagine = imagines.length - 1;
    } else{
        indexOfCurrentImagine--;
    }

    currentImagine.src = "imgs/".concat(imagines[indexOfCurrentImagine]);


}

function next(){
    if(indexOfCurrentImagine === imagines.length - 1)
    {
        indexOfCurrentImagine = 0;
    } else{
        indexOfCurrentImagine++;
    }

    currentImagine.src = "imgs/".concat(imagines[indexOfCurrentImagine]);
}


console.log(indexOfCurrentImagine);